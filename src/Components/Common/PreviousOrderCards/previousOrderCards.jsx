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
const PreviousOrderCards = ({OrderStatus}) => {
    // Dynamically assign text and styles
    let statusText = OrderStatus;
    let bgColor = "";
    let textColor = "";

    switch (OrderStatus) {
        case "Dine In":
        case "Paid":
        case "Handed Over":
        case "Ready":
            // statusText = case;
            bgColor = "bg-light-green";
            textColor = "text-light-green";
            break;
        case "In Progress":
            // statusText = "In Progress";
            bgColor = "bg-light-yellow";
            textColor = "text-yellow-color";
            break;
        case "Delivered":
            // statusText = "Delivered";
            bgColor = "bg-light-status-orage-color";
            textColor = "text-color-orange";
            break;
        case "Unsuccessful":
            // statusText = "Unsuccessful";
            bgColor = "bg-color-red";
            textColor = "text-color-red";
            break;
        default:
            break; // No status
    }

    return (
        <>

            {/* <div> */}

            <div className="previous-order bg-white rounded-3xl card-box-shadow m-3 p-4">
                {/* Date & Time */}
                <div className="flex justify-between text-sm pb-3">
                    <div className="font-medium">
                        <span className='text-sm text-color-gray pb-1'> Date :<span className='text-xs text-color-black ps-1'>12-12-24</span> </span>
                        <div className='text-sm text-color-gray'>Time:<span className='text-sm text-color-black ps-1'> 05:30 PM</span></div>
                    </div>

                    {/* Order Status Tag */}
                    {statusText && (
                        <div className={`${textColor} h-full text-xs font-medium ${bgColor} px-2 py-1 rounded-md inline-block`}>
                            {statusText}
                        </div>
                    )}

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
                <div className="mb-2 h-12 overflow-auto hidden-scroll note-bg-color p-2 rounded-md text-color-gray text-xs font-normal">
                    Notes: Lorem ipsum dolor sit amet ipsum dolor sit amet
                </div>

                {/* Reorder Button */}
                <Button title={"Re-Order"} />
            </div>

            {/* </div> */}
        </>
    )
}

export default PreviousOrderCards;
