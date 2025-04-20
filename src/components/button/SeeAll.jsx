import React from 'react';
import { TbGridDots } from "react-icons/tb";

const SeeAll = ({ link }) => {
    return (
        <a href={link}  className='text-xl flex items-center hover:opacity-80 duration-200 text-[18px]'>
            <span className='mr-3 text-[15px]'>SEE ALL</span>
            <TbGridDots />
        </a>
    )
}
export default SeeAll;