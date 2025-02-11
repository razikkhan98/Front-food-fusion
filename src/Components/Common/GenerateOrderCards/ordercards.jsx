
import React from 'react'
import Button from "../button/button";

// const CardsColor=[""]
const GenerateOrderCards = ({OrderStatus}) => {
    return (
        <>


            {/* <div> */}
            {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => ( */}
            <div className="max-w-xs bg-white rounded-3xl shadow-lg p-4 mb-4">
                {/* Date & Time */}
                <div className="flex justify-between text-gray-600 text-sm pb-2">
                    <div className='flex'>
                        <div className='uppercase rounded-md bg-white p-2 text-base text-center border mr-2'>RV</div>
                        <div className="font-medium">
                            <div className='text-base text-black'>Rahul Vijay</div>
                            <div className='text-gray-400 text-xs'>Table 2</div>
                        </div>
                    </div>

                    {/* Dine In Tag */}
                    { (OrderStatus === "Dine In" || "Paid" || "Handed Over" || "Ready" )? (
                        <>
                            <div className="text-light-green h-full text-xs font-semibold bg-light-green px-2 py-1 rounded-md inline-block ">
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


                <div className="flex justify-between text-gray-600 text-sm pb-2">
                    <div className="font-medium">
                        <div className='text-gray-500 text-xs'>Booking ID : <span className='font-semibold text-black'>123456789</span> </div>
                        <div className='text-gray-500 text-xs'>Order No: <span className='font-semibold text-black'>312</span> </div>
                    </div>


                    {/* Dine In Tag */}
                    <div className="h-full text-xs text-black font-semibold bg-gray-100 px-3 py-2 rounded-md inline-block ">
                        05:22
                    </div>

                </div>


                {/* Items Table */}
                <div className="mt-0 border-t border-gray-200">
                    <div className="grid grid-cols-3 text-gray-400 text-xs font-medium py-1">
                        <span>Items</span>
                        <span className="text-center">Qty</span>
                        <span className="text-right">Price</span>
                    </div>


                    <div className="h-[100px] overflow-auto hidden-scroll text-xs/5">
                        <div className="grid grid-cols-3 py-1">
                            <span>Veg Pizza</span>
                            <span className="text-center">1</span>
                            <span className="text-right">₹ 280</span>
                        </div>
                        <div className="grid grid-cols-3  py-1">
                            <span>Samosa</span>
                            <span className="text-center">2</span>
                            <span className="text-right">₹ 40</span>
                        </div>
                        <div className="grid grid-cols-3 py-1">
                            <span>Samosa</span>
                            <span className="text-center">2</span>
                            <span className="text-right">₹ 40</span>
                        </div>
                    </div>


                    {/* Total */}
                    <div className="grid grid-cols-3 text-gray-900 font-semibold border-t border-gray-200 mt-1 py-1">
                        <span>Total</span>
                        <span></span>
                        <span className="text-right">₹ 280</span>
                    </div>
                </div>


                {/* Notes Section */}
                <div className="mb-2 bg-gray-100 p-3 rounded-md text-gray-500 text-sm">
                    Notes: Lorem ipsum dolor sit amet
                </div>


                {/* Reorder Button */}
                {/* <button className="w-full mt-0 bg-orange-500 text-white py-2 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
                Re-Order
              </button> */}
                <Button title={"Re-Order"} />
            </div>
            {/* ))} */}
            {/* </div> */}
        </>
    )
}


export default GenerateOrderCards;