import React from 'react';
import { NavLink } from 'react-router-dom';
import Lottie from "lottie-react";
import img from '../../images/112233-book-icon.gif'
const Header = () => {
    return (
        <div className='w-[80%] mx-auto py-5 flex justify-between items-center'>
            <div className='flex gap-2'>
            <img className='w-8 h-8' src={img} alt="" />
            <h1 className='text-xl font-semibold'>BookStall</h1>
            </div>
            <div className='space-x-2 text-lg'>
         <NavLink
     to="/"
     style={({ isActive }) => {
    return {
      color: isActive ? "blue" : ""
    };
  }}
>
  Home
</NavLink>
         <NavLink
     to="/books"
     style={({ isActive }) => {
    return {
      color: isActive ? "blue" : ""
    };
  }}
>
  Books
</NavLink>
         <NavLink
     to="/about"
     style={({ isActive }) => {
    return {
      color: isActive ? "blue" : ""
    };
  }}
>
  About
</NavLink>
            </div>
        </div>
    );
};

export default Header;