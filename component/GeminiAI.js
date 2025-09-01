"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { XIcon, RefreshCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";

import Logo from "@/app/favicon.ico";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

function GeminiAI({ todos, closeAI }) {
  const aiRef = useRef();
  const [todoData, setTodoData] = useState([]);
  const [result,setResult]=useState("");

  const [makeLoad, setMakeLoad] = useState(true);
  const [error, setError] = useState(false);

  const handleAiResponse=async(list)=>{
    setMakeLoad(true);
    try {
        const res= await axios.post("/api/gemini",{todos:list});
        setResult(res.data.response);
        setError(false);
    } catch (error) {
        toast.error("Gemini AI not responding!");
        setError(true);
    } finally {
        setMakeLoad(false);
    }
  }

    useEffect(() => {
    if (todos && Array.isArray(todos)) {
        const onlyTodos = todos.map(item => item.todo);
        setTodoData(onlyTodos);
        handleAiResponse(onlyTodos);
    }
    }, [todos]);


  useEffect(() => {
    const handleOverClick = (e) => {
      if (aiRef.current && !aiRef.current.contains(e.target)) {
        closeAI();
      }
    };
    document.addEventListener("mousedown", handleOverClick);
    return () => document.removeEventListener("mousedown", handleOverClick);
  }, [closeAI]);

  return (
    <div
      ref={aiRef}
      className="z-[999] fixed w-full flex items-center justify-center flex-col bottom-0 px-1"
    >
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative sm:w-1/3 w-full h-72 border-2 border-gray-400 bg-slate-50 shadow-xl rounded-t-xl p-1"
      >
        <XIcon
          size={28}
          className="text-red-500 absolute right-0 cursor-pointer"
          onClick={closeAI}
        />
        <RefreshCcw
          size={30}
          className={`absolute bottom-5 cursor-pointer right-6 bg-black/70 text-white p-1 rounded-lg ${
            makeLoad || error ? "hidden" : "block"
          }`}
          onClick={()=>handleAiResponse(todoData)}
        />
        <h1 className="text-2xl sm:text-3xl px-3 font-medium text-transparent bg-clip-text w-fit bg-gradient-to-r from-[#EA4335] via-[#34A853] to-[#4285F4]">
          Gemini
        </h1>

        {error && <Error regenerate={()=>handleAiResponse(todoData)}/>}

        {makeLoad ? (
          <Loader />
        ) : (
          <div
            className={`w-full h-56 overflow-auto border-2 rounded-xl mt-2 border-gray-300 shadow-lg px-2 ${
              error ? "hidden" : "block"
            }`}
          >
            <ReactMarkdown>{result}</ReactMarkdown>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default GeminiAI;

function Loader() {
  return (
    <div className="w-full h-56 flex items-center justify-center flex-col gap-y-0.5 animate-pulse">
      <Image src={Logo} alt="Loading..." width={40} height={40} className="animate-spin" />
      <span className="font-medium font-mono text-center w-full">
        Waiting for Gemini to respond...
      </span>
    </div>
  );
}

function Error({regenerate}) {
  return (
    <div className="w-full h-56 flex items-center justify-center flex-col gap-y-2">
      <h3 className="text-red-500 text-xl text-center font-medium">An error occurred!</h3>
      <div className="flex items-center justify-normal group gap-x-1 border-red-600 border-2 p-3 rounded-full text-lg font-mono text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
      onClick={regenerate}
      >
        <RefreshCcw className="group-hover:-rotate-90 transition-transform" />
        Regenerate
      </div>
    </div>
  );
}