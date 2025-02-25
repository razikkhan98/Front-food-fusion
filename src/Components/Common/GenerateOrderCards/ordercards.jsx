
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

    // Dynamically assign text and styles
    let statusText = OrderStatus;
    let bgColor = "";
    let textColor = "";

    switch (OrderStatus) {
        case "Dine In":
        case "Paid":
        case "Handed Over":
        case "Ready":
            // statusText = "Dine In";
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
            {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => ( */}
            <div className="generate-order-card bg-white rounded-3xl card-box-shadow m-3 p-4">
                {/* Date & Time */}
                <div className="flex justify-between text-sm pb-3">
                    <div className='flex'>
                        <div className='uppercase rounded-md bg-white p-2 text-base font-normal text-light-gray-color text-center border mr-2'>RV</div>
                        <div className="font-medium">
                            <div className='text-base text-color-black'>Rahul Vijay</div>
                            <div className='text-light-gray-color text-xs'>Table 2</div>
                        </div>
                    </div>


                    {/* Order Status Tag */}
                    {statusText && (
                        <div className={`${textColor} h-full text-xs font-medium ${bgColor} px-2 py-1 rounded-md inline-block`}>
                            {statusText}
                        </div>
                    )}
                </div>


                <div className="flex justify-between pb-2">
                    <div className="font-medium text-xs">
                        <div className='text-color-gray pb-1'>Booking ID : <span className='text-color-black'>123456789</span> </div>
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


                    <div className="h-14 overflow-auto hidden-scroll text-xs/5">
                        {items.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 py-1">
                                <span>{item.name}</span>
                                <span className="text-center">{item.quantity}</span>
                                <span className="text-right">₹ {item.price}</span>
                            </div>
                        ))}
                    </div>


                    {/* Total */}
                    <div className="grid grid-cols-3 text-color-black font-normal text-xs border-t border-gray-200 mt-1 py-2">
                        <span>Total</span>
                        <span></span>
                        <span className="text-right">₹ 280</span>
                    </div>
                </div>


                {/* Notes Section */}
                <div className="mb-2 px-3 py-2 rounded-md note-bg-color text-color-gray text-xs font-normal h-12 overflow-auto hidden-scroll">
                    Notes: Lorem ipsum dolor sit amet ipsum dolor sit amet
                </div>


                {/* Generate invoice Button */}
                <Button title={"Generate Invoice"} />
            </div >
            {/* ))} */}
            {/* </div> */}
        </>
    )
}


export default GenerateOrderCards;