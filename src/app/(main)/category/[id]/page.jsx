import React from 'react';
import LeftSideBar from '@/Components/homepage/news/LeftSideBar';
import NewsCard from '@/Components/homepage/news/newsCard';
import RightSideBar from '@/Components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
 
 
const NewsCategoryPage = async({params}) => {
    const {id} = await params;
    console.log(id , "all URLLink");

     const categories = await getCategories();
     const news = await getNewsByCategoryId(id);
  
    return (
        <div className='text-center'>
            <div className="grid grid-cols-12 gap-4 my-6 container mx-auto ">
                  <div className="col-span-3">
            
                    <LeftSideBar categories={categories} active_id={id}/>
            
                  </div>
            
                  <div className="col-span-6">
                    <h2 className="text-xl font-medium mb-4">News By Category</h2>
                      <div className="space-y-4">
                        {news.length > 0 ?
                      news.map((e) => {

                        return <NewsCard 
                        key={e._id}
                        news={e}
                        >
                         </NewsCard>;

                      }): <h2 className='font-bold text-6xl mt-44 text-purple-800'>No Data Found!</h2>
                    }
                      </div>
                  </div>
                  <div className=" col-span-3">
                     <RightSideBar/>
                  </div>
                   
               </div>
        </div>
    );
};

export default NewsCategoryPage;