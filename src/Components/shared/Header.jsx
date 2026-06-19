import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import {  format } from "date-fns";

const Header = () => {
    return (
        <div className="text-center py-4 space-y-3">
             <Image src={logo} alt="Logo" height={300} width={300} className="mx-auto"/>
             <p className=" text-gray-500">Journalism Without Fear or Favour</p>
             <p> {format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;