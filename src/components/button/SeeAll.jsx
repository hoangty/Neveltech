import React from 'react';
import { TbGridDots } from "react-icons/tb";

const SeeAll = ({ link }) => {
    return (
        <a href={link}  className='text-xl md:flex items-center'>
            <span className='mr-2'>SEE ALL</span>
            <TbGridDots />
        </a>
    )
}
export default SeeAll;