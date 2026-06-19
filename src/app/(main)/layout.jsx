import BreakingNews from '@/Components/shared/BreakingNews';
import Footer from '@/Components/shared/Footer';
import Header from '@/Components/shared/Header';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
         <Header/>   
         <BreakingNews/>   

         <Navbar/>   
            <main> 
            {children}
            </main>
         <Footer/>
        </>
    );
};

export default MainLayout;