import React from 'react'

const Button = ({ title, }) => {
    return (
        <>
        <button className='w-full py-2 cashier-main-text-color text-gray-600 rounded-full font-semibold border-[--cashier-main-color] border-2 my-1 hover:bg-[--cashier-main-color] hover:text-white' type='button'>{title}</button>

        </>
    );
};

export default Button;
