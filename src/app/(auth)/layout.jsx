import Navbar from '@/Components/shared/Navbar';
import React from 'react';
 
import Providers from '../providers';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Providers>
        {children}
      </Providers>
    </div>
  );
};

export default AuthLayout;