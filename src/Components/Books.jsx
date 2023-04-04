import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Spinner from './Spinner';

const Books = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
      return <Spinner></Spinner>
    }
    const books=useLoaderData();
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-5xl font-bold text-center mt-5 text-blue-600'>All Books Are Here....</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
                {books.books.map(book=><Book
                book={book}
                key={book.isbn13}
                ></Book>)}
            </div>
        </div>
    );
};

export default Books;