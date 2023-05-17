import React from 'react'
import Image from 'next/image';
import ContactImg from "../public/assets/contact.jpg";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='w-full lg:h-screen' id="contact">
            <div className="max-w-fit m-auto px-24 py-4 w-full">
                <p className="text-xl tracking-widest uppercase text-[#565le5]">Contact</p>
                <h2 className="py-2">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-2 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="contact-img" />
                            </div>
                            <div className='py-3'>
                                <h2 className='uppercase'>s.k.velmurugan</h2>
                                <p className='py-2'>Frontend Developer</p>
                                <p className='py-2'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                            </div>
                            <div className="py-7">
                                <p className='uppercase'>contact with me</p>
                                <div className="flex py-3 items-center justify-between">
                                    <div className="rounded-full shadow-lg p-2 shadow-gray-400 hover:scale-75 duration-75 cursor-pointer">
                                        <AiFillLinkedin size={25} />
                                    </div>
                                    <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                                        <AiFillGithub size={25} />
                                    </div>
                                    <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                                        <AiOutlineMail size={25} />
                                    </div>
                                    <div className="rounded-full shadow-lg p-2 shadow-gray-600 hover:scale-75 duration-75 cursor-pointer">
                                        <AiOutlineUser size={25} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right */}
                    <div className="col-span-3 lg:col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="p-4">
                            <form action="">
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="" className='uppercase text-sm py-1'>name</label>
                                        <input type='text' className='rounded-lg border-2 p-3 border-gray-300' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="" className='uppercase text-sm py-1'>phone number</label>
                                        <input type='text' className='rounded-lg border-2 p-3 border-gray-300' />
                                    </div>
                                    <div className="col-span-2 flex flex-col py-2">
                                        <label htmlFor="" className='uppercase text-sm py-1'>email</label>
                                        <input type='email' className='rounded-lg border-2 p-3 border-gray-300' />
                                    </div>
                                    <div className="col-span-2 flex flex-col py-2">
                                        <label htmlFor="" className='uppercase text-sm py-1'>subject</label>
                                        <input type='text' className='rounded-lg border-2 p-3 border-gray-300' />
                                    </div>
                                    <div className="col-span-2 flex flex-col py-2">
                                        <label htmlFor="" className='uppercase text-sm py-1'>Message</label>
                                        <textarea className='rounded-lg border-2 p-3 border-gray-300' rows='9' />
                                    </div>                                    
                                </div>
                                <button className='uppercase w-full p-3 mt-3'>send message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-8">
                    <Link href='/'>
                        <div className="rounded-full shadow-lg p-2 shadow-gray-400 hover:scale-75 duration-75 cursor-pointer">
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact