'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from "@/lib/auth-client"

const Navbar = () => {

    const { data: session , isPending} = authClient.useSession();
    const user = session?.user; 
    console.log(user, isPending, "user");


    return (
        <div className="flex items-center justify-between  mt-6 container mx-auto">
            <div></div>

            <ul className="flex justify-between items-center text-gray-700 space-x-4">
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about-us">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>


            {isPending ? 
             (<span className="loading loading-dots loading-xl"></span>) : 
              user ?  (
                <div className="flex items-center space-x-4">
                <h2>Hello, {user?.name}</h2>
                <Image
                src={user?.image || userAvatar}
                alt="User Avatar"
                width={60}
                height={60}
                priority
                className="rounded-full"
            />
                <button 
                    className="btn bg-purple-700 text-white" 
                    onClick={async() => await authClient.signOut()}>
                    <Link href="/">LogOut</Link>
                </button>

            </div>) :
            ( <button 
                    className="btn bg-purple-700 text-white">
                    <Link href="/login">Login</Link>
                </button>)}
        </div>
    );
};

export default Navbar;