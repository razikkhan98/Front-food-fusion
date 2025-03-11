import React from 'react'

// Import Images
import Point from "../../Assets/Images/previous/coin_16821589.svg";

// import Button from '../Button/button';
import { IoCallOutline } from 'react-icons/io5';
import { GoHome, GoMail } from 'react-icons/go';

// Json
const UserData = [
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
    {
        title: "RV",
        name: "Rahul Vijay",
        reward: 120,
        contact: 123456789,
        gmail: "demo12334@gmail.com",
        address: "123 Main Street, Apartment 4B, Indore, Madhya Pradesh, 326023",
    },
]

const UserDetailaCard = () => {
    return (
        <>
            {UserData.map((items, index) => (
                <div class="bg-white border rounded-xl p-4 flex flex-col my-3">
                    <div className='flex items-center'>
                        <div>
                            <div class="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='uppercase rounded-md bg-white p-2 text-base text-center border mr-2'>{items.title}</div>
                                    <div className="font-medium">
                                        <div className='text-base text-color-dark'>{items.name}</div>
                                        <div className='text-color-black text-xs font-normal flex'>
                                            <img src={Point} className='h-4 w-4 me-2' alt="Loading" />
                                            {items.reward} Reward Points </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 mt-4 pt-4 grid grid-cols-3 gap-4 text-sm">
                                <div className="font-medium flex justify-start">
                                    <div className='icon-bg-color flex items-center justify-center h-8 w-8 rounded-full me-3'>
                                        <IoCallOutline className='text-xl text-color-green' />
                                    </div>
                                    <div>
                                        <p className='text-light-gray-color text-xs'>Contact No</p>
                                        <p className='text-color-black text-sm'>{items.contact}</p>
                                    </div>
                                </div>
                                <div className="font-medium flex">
                                    <div className='icon-bg-color flex items-center justify-center h-8 w-8 rounded-full me-3'>
                                        <GoMail className='text-xl text-blue-color' />
                                    </div>
                                    <div>
                                        <p className='text-light-gray-color text-xs'>E-mail Address</p>
                                        <p className='text-color-black text-sm'>{items.gmail}</p>
                                    </div>
                                </div>
                                <div className="font-medium flex">
                                    <div className='icon-bg-color flex items-center justify-center h-8 w-12 rounded-full me-3'>
                                        <GoHome className='text-xl text-color-gray' />
                                    </div>
                                    <div>
                                        <p className='text-light-gray-color text-xs'>Delivery Address</p>
                                        <p className='text-color-black text-sm'>{items.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <Button title={"View Previous Orders"} /> */}
                        <div>
                            <button className='w-56 py-2 mx-5 cashier-main-text-color text-base font-medium rounded-full border-[--cashier-main-color] border-2 my-1 hover:bg-[--cashier-main-color] hover:text-white'>View Previous Orders</button>

                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default UserDetailaCard