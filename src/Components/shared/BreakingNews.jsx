import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    id: 1,
    title: "AI Technology Continues to Transform Industries",
  },
  {
    id: 2,
    title: "Global Markets Show Strong Growth",
  },
  {
    id: 3,
    title: "National Football Team Wins Championship",
  },
  {
    id: 4,
    title: "Scientists Discover New Marine Species",
  },
  {
    id: 5,
    title: "New Education Policy Announced",
  },
];

const BreakingNews = () => {
    return (
        <div className = 'flex items-center gap-5 py-3 px-2 bg-gray-100 container mx-auto'>
            <button className='btn bg-pink-700  text-white '>Latest News</button>
        <Marquee pauseOnHover={true} speed={60} gradient={false}>
            {news.map((item) => (
                <span key={item.id} className=' mx-1 text-zinc-900 font-semibold'>{item.title}   | </span>
            ))}
        </Marquee>
        </div>
    );
};

export default BreakingNews;