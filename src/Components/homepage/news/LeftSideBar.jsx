import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories , active_id}) => {
    return (
        <div>
            <h2 className="text-xl font-medium">All Category</h2>
            <ul className="flex flex-col my-4  space-y-2 bg-purple-200 shadow-2xl">
                {
                categories.news_category.map((category) => {
                    return <li key={category.category_id}
                    className={`${active_id === category.category_id && "bg-purple-600 text-white mx-2 shadow-2xl"}    rounded text-center my-3 cursor-pointer`}
                    > 
                   <Link href={`/category/${category.category_id}`} 
                   className='block p-2 '
                   > 
                   {category.category_name}</Link>
                    
                    </li>
                })
                
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;