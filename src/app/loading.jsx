import React from 'react';

const LoadingPage = () => {
    return (
        <div className='h-[85vh] flex justify-center items-center'>
            Global Loading...  
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default LoadingPage;