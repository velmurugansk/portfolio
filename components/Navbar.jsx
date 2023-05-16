'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose, AiFillLinkedin,AiFillGithub, AiOutlineMail, AiOutlineUser} from "react-icons/ai";
import {useState} from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        nav ? setNav(false) : setNav(true);
    }

    return (
        <div className="fixed w-full h-20 z-[100] shadow-xl bg-[#ecf0f3]">
            <div className="flex justify-between w-full h-full px-2 2xl:px-16 items-center">
                <Image src="/../public/assets/logo.png" alt="logo" width="125" height="40"></Image>
                <div className="h-100">
                    <ul className="hidden md:flex items-center">
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b border-red-700 uppercase">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b border-red-700 uppercase">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b border-red-700 uppercase">Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b border-red-700 uppercase">Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b border-red-700 uppercase">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu />
                </div>
            </div>  
            <div className={!nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : "" }>
                <div className={!nav ? "fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] p-4 bg-[#ecf0f3] ease-in duration-500" : "md:hidden fixed left-[-100%] top-0 p-4 bg-[#ecf0f3] ease-in duration-500"}>
                    <div>
                        <div className="flex items-center justify-between">
                            <Image src="/../public/assets/logo.png" alt="side-logo" width='85' height='35'></Image>
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                    <div className="py-3 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-3 px-2 text-sm">Home</li>
                            </Link>
                            <Link href="/">
                                <li className="py-3 px-2 text-sm">About</li>
                            </Link>
                            <Link href="/">
                                <li className="py-3 px-2 text-sm">Skills</li>
                            </Link>
                            <Link href="/">
                                <li className="py-3 px-2 text-sm">Projects</li>
                            </Link>
                            <Link href="/">
                                <li className="py-3 px-2 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-60 px-2">
                            <p className="uppercase tracking-widest text-[#565le5]">Let's Connect</p>
                            <div className="flex items-center justify-between">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-75 duration-75">
                                    <AiFillLinkedin />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-75 duration-75">
                                    <AiFillGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-75 duration-75">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-75 duration-75">
                                    <AiOutlineUser />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>        
        </div>
    )
}

export default Navbar;