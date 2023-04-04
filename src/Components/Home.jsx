import React from 'react';
import Lottie from "lottie-react";
import animation from "../assets/98849-book-lover.json";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Link, useNavigation } from 'react-router-dom';
import Spinner from './Spinner';

const Home = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
      return <Spinner></Spinner>
    }
    return (
        <div className='w-[80%] mx-auto flex md:flex-row flex-col-reverse items-center'>
       <div className='md:w-1/2 space-y-4'>
       <h1 className='text-4xl font-semibold'>A reader lives a
<br /><span className='text-blue-600'>thousand lives before he dies</span></h1>
<p>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>

<div className='space-x-4'>
<Link to='/books'><button className='bg-blue-600 text-lg mt-4 hover:bg-blue-700 text-white rounded-md px-5 py-2'>Visit Store</button></Link>
<button className='bg-yellow-600 text-lg mt-4 hover:bg-yellow-700 text-white rounded-md px-4 py-2'>Learn More</button>
</div>
       </div>
      <div>
      <Lottie animationData={animation} loop={true} />
      </div>
        </div>
    );
};

export default Home;