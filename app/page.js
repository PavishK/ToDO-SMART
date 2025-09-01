"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { ArrowRight, Link, TimerIcon } from "lucide-react";
import "./globals.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/component/Loader";
import axios from "axios";

function Page() {
  const router = useRouter();
  const [makeLoading, setMakeLoading] = useState(true);
  const { data: session, status } = useSession();

  const onClickLink = () => {
    window.open(
      "https://personal-portfolio-rdxc.onrender.com",
      "_blank",
      "width=900,height=800"
    );
  };

  const userHandler = async () => {
    setMakeLoading(true);
    try {
      const res = await axios.post("/api/user", session.user);
      toast.success(res.data.message);

      // ✅ Directly use res.data.userId, no need to store in state
      router.push(`/user-todo-list/${res.data.userId}`);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setMakeLoading(false);
    }
  };

  const moveToDashboard = async () => {
    if (session && status === "authenticated") {
      try {
        // ✅ Refetch userId on demand instead of relying on state
        const res = await axios.post("/api/user", session.user);
        router.push(`/user-todo-list/${res.data.userId}`);
      } catch {
        toast.error("Oops! Could not load dashboard.");
      }
    } else {
      toast.error("Oops! An error occurred!");
    }
  };

  useEffect(() => {
    if (status === "loading") {
      setMakeLoading(true);
    } else {
      setMakeLoading(false);
    }

    if (session && status === "authenticated") {
      userHandler();
    }
  }, [session, status]);

  return (
    <>
      <div className="flex items-center justify-center flex-col w-screen h-screen">
        <div className="flex items-center justify-between w-full p-3">
          <h1 className="sm:text-2xl text-xl text-pink-500 font-medium bg-bg w-fit h-fit p-3 rounded-full border">
            ToDo-SMART
          </h1>
          <div className="flex items-center justify-center gap-x-6 w-fit h-fit p-3 bg-bg sm:text-xl text-primary rounded-full border">
            <h2>Home</h2>
            <Link size={25} onClick={onClickLink} />
          </div>
        </div>

        <div className="w-full h-screen border-t my-2 p-6 flex flex-col items-center justify-center text-center gap-y-1.5">
          <h1 className="text-3xl font-bold mb-2 text-pink-500">
            ToDo-Smart: A Smart To-Do List with AI
          </h1>
          <p className="text-secondary max-w-lg">
            Manage your tasks with ease — create, update, and delete lists
            effortlessly. Let our AI analyze your tasks and provide smart
            insights to help you stay productive.
          </p>

          {session ? (
            <div className="flex flex-col gap-y-3 items-center justify-normal">
              <button
                className="flex items-center cursor-pointer justify-center gap-x-1.5 border p-2 rounded-full mt-3 hover:bg-blue-500 hover:text-white"
                onClick={moveToDashboard}
              >
                <TimerIcon size={28} />
                Your session is still active
              </button>

              <button
                className="cursor-pointer hover:underline w-fit"
                onClick={() => signOut("google")}
              >
                <span className="flex items-center gap-x-0.5">
                  Logout <ArrowRight size={18} />
                </span>
              </button>
            </div>
          ) : (
            <button
              className="flex items-center cursor-pointer justify-center gap-x-1.5 border p-2 rounded-full mt-3 hover:bg-blue-500 hover:text-white"
              onClick={() => signIn("google")}
            >
              <Image
                src={"https://www.svgrepo.com/show/355037/google.svg"}
                alt="Google"
                width={30}
                height={30}
              />
              Continue with Google
            </button>
          )}
        </div>

        {makeLoading && <Loader />}
      </div>
    </>
  );
}

export default Page;