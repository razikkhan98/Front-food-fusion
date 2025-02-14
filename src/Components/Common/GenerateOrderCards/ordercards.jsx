
import React from 'react'
import Button from "../Button/button";

// Role Json 
const items = [
    { name: "Veg Pizza", quantity: 1, price: 280 },
    { name: "Samosa", quantity: 2, price: 40 },
    { name: "Samosa", quantity: 2, price: 40 },
    { name: "Samosa", quantity: 2, price: 40 },
];

// const CardsColor=[""]
const GenerateOrderCards = ({ OrderStatus }) => {
    return (
        <>


            {/* <div> */}
            {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => ( */}
            <div className="max-w-xs h-[362px] bg-white rounded-3xl shadow-lg p-4 mb-4">
                {/* Date & Time */}
                <div className="flex justify-between text-sm pb-2">
                    <div className='flex'>
                        <div className='uppercase rounded-md bg-white p-2 text-base font-normal text-light-gray-color text-center border mr-2'>RV</div>
                        <div className="font-medium">
                            <div className='text-base text-color-black'>Rahul Vijay</div>
                            <div className='text-light-gray-color text-xs'>Table 2</div>
                        </div>
                    </div>

                    {/* Dine In Tag */}
                    {(OrderStatus === "Dine In" || "Paid" || "Handed Over" || "Ready") ? (
                        <>
                            <div className="text-light-green h-full text-xs font-medium bg-light-green px-2 py-1 rounded-md inline-block ">
                                Dine In
                            </div>
                        </>
                    ) : OrderStatus === "In Progress" ?
                        (
                            <>
                                <div className="text-yellow-400 h-full text-xs font-semibold bg-light-yellow px-2 py-1 rounded-md inline-block ">
                                    In Progress
                                </div>
                            </>
                        ) : OrderStatus === "Delivered" ? (
                            <>
                                <div className="text-yellow-600 h-full text-xs font-semibold bg-yellow-100 px-2 py-1 rounded-md inline-block ">
                                    Delivered
                                </div>
                            </>
                        )
                            : OrderStatus === "Unsuccessfull" ? (
                                <>
                                    <div className="text-color-red h-full text-xs font-semibold bg-color-red px-2 py-1 rounded-md inline-block ">
                                        Unsuccessfull
                                    </div>
                                </>
                            ) : null
                    }
                </div>


                <div className="flex justify-between pb-2">
                    <div className="font-medium text-xs">
                        <div className='text-color-gray'>Booking ID : <span className='text-color-black'>123456789</span> </div>
                        <div className='text-color-gray'>Order No: <span className=' text-color-black'>312</span> </div>
                    </div>


                    {/* Dine In Tag */}
                    <div className="h-full text-xs text-color-black font-normal bg-light-color px-3 py-2 rounded-md inline-block ">
                        05:22
                    </div>

                </div>


                {/* Items Table */}
                <div className="mt-0 border-t border-gray-200">
                    <div className="grid grid-cols-3 text-light-gray-color text-xs font-medium py-1">
                        <span>Items</span>
                        <span className="text-center">Qty</span>
                        <span className="text-right">Price</span>
                    </div>


                    <div className="h-[100px] overflow-auto hidden-scroll text-xs/5">
                        {items.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 py-1">
                                <span>{item.name}</span>
                                <span className="text-center">{item.quantity}</span>
                                <span className="text-right">₹ {item.price}</span>
                            </div>
                        ))}
                    </div>


                    {/* Total */}
                    <div className="grid grid-cols-3 text-color-black font-normal text-xs border-t border-gray-200 mt-1 py-1">
                        <span>Total</span>
                        <span></span>
                        <span className="text-right">₹ 280</span>
                    </div>
                </div>


                {/* Notes Section */}
                <div className="mb-2 bg-light-color p-3 rounded-md text-color-gray text-xs font-normal">
                    Notes: Lorem ipsum dolor sit amet
                </div>


                {/* Generate invoice Button */}
                <Button title={"Generate Invoice"} />
            </div>
            {/* ))} */}
            {/* </div> */}
        </>
    )
}


export default GenerateOrderCards;