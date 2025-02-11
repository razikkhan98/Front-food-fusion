import React from 'react'
import Button from "../Button/button";
const PreviousOrderCards = () => {
    return (
        <>

            {/* <div> */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div className="max-w-sm bg-white rounded-3xl shadow-xl  p-4 mb-4">
                    {/* Date & Time */}
                    <div className="flex justify-between text-gray-600 text-sm pb-2">
                        {/* hidden details */}
                        <div className='flex hidden'>
                            <div className='uppercase rounded-md bg-white p-2 text-center border mr-2'>RV</div>
                            <div className="font-semibold">
                                <div className='text-md text-black'>Rahul Vijay</div>
                                <div className='text-gray-400 text-xs'>Table 2</div>
                            </div>
                        </div>

                        <div className="font-medium">
                            <div>Date : 12-12-24</div>
                            <div>Time:05:30 PM</div>
                        </div>
                        {/* Dine In Tag */}

                        <div className="text-green-600 h-full text-xs font-semibold bg-green-100 px-2 py-1 rounded-md inline-block ">
                            Dine In
                        </div>
                        {/* hidden details */}
                        <div className="h-full text-xs font-semibold bg-gray-100 px-4 py-1 rounded-md hidden">
                            05:25
                        </div>
                    </div>
                   

                    {/* Items Table */}
                    <div className="mt-0 border-t border-gray-200">
                        <div className="grid grid-cols-3 text-gray-400 text-sm font-medium py-1">
                            <span>Items</span>
                            <span className="text-center">Qty</span>
                            <span className="text-right">Price</span>
                        </div>

                        <div className="h-[100px] overflow-auto hidden-scroll">
                            <div className="grid grid-cols-3 text-gray-700 py-1">
                                <span>Veg Pizza</span>
                                <span className="text-center">1</span>
                                <span className="text-right">₹ 280</span>
                            </div>
                            <div className="grid grid-cols-3 text-gray-700 py-1">
                                <span>Samosa</span>
                                <span className="text-center">2</span>
                                <span className="text-right">₹ 40</span>
                            </div>
                            <div className="grid grid-cols-3 text-gray-700 py-1">
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
            ))}
            {/* </div> */}
        </>
    )
}

export default PreviousOrderCards;
