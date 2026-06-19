import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({news}) => {
    console.log(news,"news");


    return (
    <div className="card bg-base-100 w-full shadow-sm">
  <div className="card-body bg-base-300 ">
    {/* author */}
    <div className='flex justify-between mx-4 bg-slate-200 p-2'>
        <div className='flex gap-2 items-start '>
            
                <Image 
                src={news.author?.img} 
                alt={'news.author?.name'}
                height={40}
                width={40}
                priority
                className='rounded-full'/>

            <div className='text-start'>
                <h2 className='font-semibold'>{news.author?.name} </h2>
                <p className='text-xs'> {news.author?.published_date}</p>
            </div>
             
        </div>
        <div className='flex items-center gap-3 cursor-pointer'>
            <CiBookmark  size={20}/>
            <CiShare2  size={20}/>
        </div>
    </div>
    <h2 className="card-title">{news.title}</h2>
    <figure>
            <Image
            src={news.image_url} 
            alt={news.title} 
            height={300} 
            width={300} 
            priority
            className='w-full my-4'/>
        
    </figure>
            <p className='text-start text-zinc-600 line-clamp-3'>{news.details}</p>

        <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center gap-6'>
                <h2 className='flex items-center gap-2'> <FaStar className='text-yellow-600'/>{news.rating.number}</h2>
                <h2 className='flex items-center gap-2'><FaEye />{news.total_view}</h2>
            </div>
            <div>
                <Link href={`/news/${news._id}`}>
                <button className='btn bg-purple-700 text-white cursor-pointer'>See More</button>
                </Link>
            </div>
        </div>
  </div>
    
</div>
    );
};

export default NewsCard;