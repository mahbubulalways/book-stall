import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from './Spinner';

const BookDetails = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
      return <Spinner></Spinner>
    }
    const [more,setMore]=useState(true)
    const BookDetails=useLoaderData()
    console.log(BookDetails);
    const {title,authors,publisher,desc, subtitle,image,price,rating,url,year}=BookDetails
    return (
        <div className='flex w-full md:flex-row flex-col items-center mx-auto justify-center mt-10  px-4'>
                  <img className='w-full md:w-1/3 object-cover' src={image} alt="" />
                  <div className='w-full md:w-1/2 space-y-2 text-md font-semibold pb-10'>
                    <h1 className=' text-xl text-blue-600 md:text-3xl font-extrabold'>{subtitle}</h1>
                    <h1 className=' text-lg md:text-xl'>{title}</h1>
                    <h1>Author: {authors}</h1>
                    <h1>Publisher: {publisher}</h1>
                    <p>Price: {price}</p>
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                    {more?<>
                    <p>

                    {desc.substring(0, 100)}
                    <span onClick={()=>setMore(!more)} className='cursor-pointer text-blue-600'> see more</span>
                    </p>
                    </> :<>
                    <p>{desc}</p>
                    </> }
                     
                    
                    <p className='text-blue-500 cursor-pointer hover:border-b-2 border-red-700 w-max'> {url}</p>
                   <div className='bg-blue-700 w-max text-white px-5 py-2 hover:bg-blue-800 rounded-md'>
                   <Link to='/books'> <button>Go Back</button></Link>
                   </div>
                  </div>
                
                  
        </div>
    );
};

export default BookDetails;