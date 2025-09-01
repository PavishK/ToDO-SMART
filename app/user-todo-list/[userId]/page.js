"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Loader from "@/component/Loader";
import NavBar from "@/component/NavBar";
import { PlusIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import GeminiAI from "@/component/GeminiAI";
import { getRandomToDo } from "./randomToDo";

function ToDoList({ params }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [userId, setUserId] = useState(null);
  const [makeLoading, setMakeLoading] = useState(false);

  const [todos, setTodos] = useState([]);
  const [filterTodos,setFilterTodos]=useState([]);

  const [lastChanged, setLastChanged] = useState(-1);

  const [toggleAi,setToggleAi]=useState(false);

  const verifyUser = async () => {
    setMakeLoading(true);
    try {
      const { userId } = await params;
      if (!userId) throw new Error("Invalid user id");
      await axios.post("/api/user/verify", { _id: userId });
      setUserId(userId);
      await fetchToDos(userId);
    } catch (error) {
      toast.error("Please login to continue!");
      router.push("/");
    } finally {
      setMakeLoading(false);
    }
  };

  const fetchToDos=async(id)=>{
    setMakeLoading(true);
    try {
      const res= await axios.get(`/api/todo/${id}`);
      setTodos(res.data.todos);
    } catch (error) {
      toast.error("Unable to fetch data!");
    } finally {
      setMakeLoading(false);
    }
  }

  const addNewToDo = async() => {
    setMakeLoading(true);
    try {
      const res= await axios.post(`/api/todo`,{todo: "🆕 Add new ToDo here.", user_id:userId});
      const newId = res.data.todoId;
      setTodos([...todos, { _id: newId, todo: "🆕 Add new ToDo here.", is_done: false }]);
    } catch (error) {
      toast.error("Unable to add ToDo!");
    } finally {
      setMakeLoading(false);
    }
  };

  const handleChange = useCallback((index, key, value) => {
    setTodos((prevTodos) => {
      const updated = [...prevTodos];
      updated[index] = { ...updated[index], [key]: value };
      return updated;
    });
    setLastChanged(index);
  }, []);

  const deleteTodo = async(id) => {
    setMakeLoading(true);
    try {
      await axios.delete(`/api/todo/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
      toast.success("ToDo deleted successfully!");
    } catch (error) {
      toast.error("Error deleting ToDo!");
    } finally {
      setMakeLoading(false);
    }
  };

  useEffect(() => {
  if (lastChanged === -1) return;

  const debouncing = setTimeout(async () => {
    try {
      const todoToUpdate = todos[lastChanged];
      if (!todoToUpdate?._id) return;

      const res = await axios.put(`/api/todo/${todoToUpdate._id}`, {
        todo: todoToUpdate.todo,
        is_done: todoToUpdate.is_done,
      });
      toast.success(res.data.message || "Todo updated!");
    } catch (error) {
      toast.error("Error updating todo!");
    } finally {
      setLastChanged(-1);
    }
  }, 1000);

  return () => clearTimeout(debouncing);
}, [lastChanged, todos]);

  useEffect(()=>{
      setFilterTodos(todos.filter(val=>val.is_done!=true));
  },[todos]);

  useEffect(() => {
    if (session && status === "authenticated") {
      verifyUser();
    } else if (!session && status === "unauthenticated") {
      toast.error("Please login to continue");
      router.push("/");
    }
  }, [session, status]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <NavBar userData={session?.user} />

      <div className="w-full flex items-center justify-center flex-col border-t border-black my-2 p-6">
      
      {todos.length==0 ? (
        <div className="text-center text-lg text-primary font-mono h-full">
          No ToDo Yet -- add your first task!
        </div>):(

        <div className="w-full flex flex-wrap justify-center items-start gap-x-4 gap-y-3">
          {todos.map((val, index) => (
            <div
              key={index}
              className={`relative w-96 h-20 border flex items-center group p-3 rounded-lg gap-x-3 ${
                val.is_done ? "bg-gray-200 border-0" : ""
              }`}
            >
              <input
                type="checkbox"
                disabled={lastChanged>=0 && lastChanged!=index}
                className="scale-150 accent-secondary"
                name="is_done"
                checked={val.is_done ?? false}
                onChange={(e) => handleChange(index, e.target.name, e.target.checked)}
              />

              <textarea placeholder={getRandomToDo()}
                className={`focus:outline-0 w-full h-full px-1 resize-none caret-primary ${
                  val.is_done ? "line-through text-secondary" : ""
                }`}
                value={val.todo ?? ""}
                name="todo"
                disabled={lastChanged>=0 && lastChanged!=index}
                onChange={(e) => handleChange(index, e.target.name, e.target.value)}
              />

              {/* {lastChanged === index && 
              <div>Loading...</div>} */}

              { lastChanged === index && <div className="absolute right-0 top-0 m-1 w-4 h-4 bg-transparent border-4 border-t-transparent animate-spin border-pink-400 rounded-full flex items-center justify-center"></div>}

              <XIcon
                size={28}
                onClick={() => deleteTodo(val._id)}
                className="sm:hidden sm:group-hover:block cursor-pointer text-red-500"
              />
            </div>
          ))}
        </div>
      )}

          <div
            className="h-20 m-3 w-full group sm:w-fit cursor-pointer bg-pink-300 flex items-center justify-center group p-3 rounded-lg gap-x-1"
            onClick={addNewToDo}
          >
            <PlusIcon className="group-hover:rotate-90 transition-transform"/>
            <p>List todo</p>
          </div>
      </div>

      {/* Ask AI */}
      {todos.length!=0 && !toggleAi && 
      <div className="fixed z-[999] w-full bottom-0 p-2 flex items-end justify-end sm:items-center sm:justify-center">
          <div className="text-lg w-fit group h-fit hover:bg-bg transition-all cursor-pointer font-medium font-mono border-pink-400 bg-pink-300 border-2 p-3 rounded-full flex items-center justify-center gap-x-3"
          onClick={()=>setToggleAi(true)}
          >
          <Image src={"/gemini.webp"} alt="AI" width={40} height={40} className="bg-white rounded-full p-1 transition-transform group-hover:-rotate-90"/>
            Ask AI
          </div>
      </div>}

      <AnimatePresence>
      {toggleAi && <GeminiAI todos={filterTodos} closeAI={()=>setToggleAi(false)}/>}
      </AnimatePresence>

      {makeLoading && <Loader />}
    </div>
  );
}

export default ToDoList;