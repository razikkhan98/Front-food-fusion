import React from 'react'

const Button = ({ title, onClick }) => {
    return (
        <>
        <button className='w-full py-2 cashier-main-text-color text-base font-medium rounded-full border-[--cashier-main-color] border-2 my-1 hover:bg-[--cashier-main-color] hover:text-white' 
        type='button'
        onClick={onClick} 
        >{title}</button>

        </>
    );
};

export default Button;
