import Navbar from '@/Components/shared/Navbar';
import React from 'react';
import { geistSans } from '../layout';
import Providers from '../providers';

const AuthLayout = ({children}) => {
    return (
        <div className= {`${geistSans.className}`}>

           <Navbar/>   
            <Providers>

            {children}
            </Providers>
        </div>
    );
};

export default AuthLayout;