import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    
    const {image,title,subtitle  ,isbn13,price}=book
    return (
        <div>
     <Link to={isbn13}>      <div className="card w-full h-full pb-4 rounded-md bg-base-100 shadow-xl relative">
  <figure><img src={image}alt="books" /></figure>
  <div className="card-body px-4 space-y-2 flex flex-col">
    <h2 className="text-lg font-semibold text-blue-600">{title}</h2>
    <h2 className=" font-semibold">{subtitle}</h2>
    <p className='mt-auto'>Price: {price}</p>
    <div className='bg-black absolute inset-0 opacity-0 hover:opacity-75 duration-500'>
         <h1 className='text-red-200 text-2xl font-semibold flex justify-center pt-60'>Click to learn more...</h1>
         </div>
  </div>
</div></Link>
        </div>
    );
};

export default Book;