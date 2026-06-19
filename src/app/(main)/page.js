import { redirect } from 'next/navigation';
import React from 'react';

const default_category_id = "01" ;   //for default category selecting = "01"

const HomePage = () => {
   redirect(`/category/${default_category_id}`)
};

export default HomePage;
