import React from 'react'
import Button from "../Button/button";

// Role Json 
const items = [
    { name: "Veg Pizza", quantity: 1, price: 280 },
    { name: "Samosa", quantity: 2, price: 40 },
    { name: "Samosa", quantity: 2, price: 40 },
    { name: "Veg Pizza", quantity: 1, price: 280 },
    { name: "Samosa", quantity: 2, price: 40 },
];
const PreviousOrderCards = () => {
    return (
        <>

            {/* <div> */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div className="previous-order bg-white rounded-3xl card-box-shadow mx-2 p-4 mb-4">
                    {/* Date & Time */}
                    <div className="flex justify-between text-sm pb-3">
                        <div className="font-medium">
                            <span className='text-sm text-color-gray pb-1'> Date :<span className='text-xs text-color-black ps-1'>12-12-24</span> </span>
                            <div className='text-sm text-color-gray'>Time:<span className='text-sm text-color-black ps-1'> 05:30 PM</span></div>
                        </div>
                        {/* Dine In Tag */}

                        <div className="text-light-green bg-light-green h-full text-xs font-medium bg-green-100 px-2 py-1 rounded-md inline-block ">
                            Dine In
                        </div>

                    </div>


                    {/* Items Table */}
                    <div className="border-t border-gray-200 mt-1">
                        <div className="grid grid-cols-3 text-light-gray-color text-sm font-medium py-2">
                            <span>Items</span>
                            <span className="text-center">Qty</span>
                            <span className="text-right">Price</span>
                        </div>

                        <div className="h-14 overflow-auto hidden-scroll my-1">
                            {items.map((item, index) => (
                                <div key={index} className={`grid grid-cols-3 py-2 text-xs font-medium`}>
                                    <span>{item.name}</span>
                                    <span className="text-center">{item.quantity}</span>
                                    <span className="text-right">₹ {item.price}</span>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="grid grid-cols-3 text-color-black font-medium text-xs border-t border-gray-200 mt-1 pt-2 pb-4">
                            <span>Total</span>
                            <span></span>
                            <span className="text-right">₹ 280</span>
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className="mb-2 h-12 overflow-auto hidden-scroll bg-gray-100 p-2 rounded-md text-gray-500 text-xs font-normal">
                        Notes: Lorem ipsum dolor sit amet ipsum dolor sit amet
                    </div>

                    {/* Reorder Button */}
                    <Button title={"Re-Order"} />
                </div>
            ))}
            {/* </div> */}
        </>
    )
}

export default PreviousOrderCards;
