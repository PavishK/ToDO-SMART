"use client";


import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import tempLogo from '@/app/favicon.ico';
import { signOut, useSession } from 'next-auth/react';
import { XIcon } from 'lucide-react';
import toast from 'react-hot-toast';

function NavBar({userData}) {
  
  const menuRef=useRef(null);
  const { data:session, status}=useSession();
  const [toggleMenu,setToggleMenu]=useState(false);

  const onClickLink=()=>{
    window.open("https://personal-portfolio-rdxc.onrender.com", "_blank", "width=900,height=800")
  }

  const onClickProfile=()=>{
    if(session && status=="authenticated"){
      setToggleMenu(true);
    } else {
      toast.error("Please login to continue");
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="relative flex z-[9999] items-center justify-between w-full p-3">
      <h1 className="sm:text-2xl text-xl text-pink-500 font-medium bg-bg w-fit h-fit p-3 rounded-full border">
        ToDo-SMART
      </h1>
      <div className="flex items-center justify-center gap-x-6 w-fit h-fit p-3 bg-bg sm:text-xl text-primary rounded-full border">
        <h2>Todos</h2>
        <Image src={userData?.image ?? tempLogo} alt={"Profile"} width={40} height={40} className='rounded-full object-cover border border-pink-400 cursor-pointer'
          onClick={onClickProfile}
        />
      </div>
    {toggleMenu && (
    <div ref={menuRef} className='absolute border-gray-100 right-0 top-0 w-72 h-fit m-1 rounded-lg bg-black/80 border-2'>
    <XIcon size={30} className='text-white absolute right-0 cursor-pointer'
      onClick={()=>setToggleMenu(false)}
    />
      <h1 className='text-3xl text-white w-full text-center my-5 font-medium'>Google</h1>

      <div className='px-5 flex items-start justify-normal flex-col gap-5'>
        <div className='flex items-center justify-normal text-white gap-x-3'>
          <Image src={userData?.image ?? tempLogo} alt={"Profile"} width={40} height={40} className='rounded-full object-cover'/>
          <div className='leading-5'>
            <p className='font-medium'>{userData?.name}</p>
            <p>{userData?.email}</p>
          </div>
        </div>
        <button className='w-full cursor-pointer hover:bg-white hover:text-black border border-gray-100 p-1.5 rounded-full text-white mb-3'
        onClick={()=>signOut('google')}
        >
          Logout
        </button>
      </div>
      <p className='text-white p-1 hover:underline cursor-pointer flex items-end justify-end text-xs'
      onClick={onClickLink}
      >Support My Work</p>
    </div>
    )}

    </div>
  )
}

export default NavBar