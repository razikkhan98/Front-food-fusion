import React from 'react'

const Button = ({ title, }) => {
    return (
        <>
        <button className='px-16 py-2 text-gray-600 rounded-full font-semibold border my-1 hover:bg-[--cashier-main-color] hover:text-white' type='button'>{title}</button>

        </>
    );
};

export default Button;
