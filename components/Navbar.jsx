import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="fixed w-full h-20 z-[100] shadow-xl">
            <div className="flex justify-between w-full h-full px-2 2xl:px-16 items-center">
                <Image src="/../public/assets/logo.png" alt="logo" width="125" height="40"></Image>
                <div className="h-100">
                    <ul className="hidden md:flex items-center">
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b uppercase">Home</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b uppercase">About</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b uppercase">Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b uppercase">Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className="ml-5 text-sm hover:border-b uppercase">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="md:hidden">
                    <AiOutlineMenu />
                </div>
            </div>  
        </div>
    )
}

export default Navbar;