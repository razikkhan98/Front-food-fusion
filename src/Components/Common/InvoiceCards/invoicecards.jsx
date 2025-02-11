import React from "react";

const InvoiceCards = () => {

    return (
        <>
            <div class="bg-white shadow-lg border rounded-xl p-4 flex flex-col my-3">
                <div class="flex justify-between items-center">
                <div className='flex'>
                        <div className='uppercase rounded-md bg-white p-2 text-base text-center border mr-2'>RV</div>
                        <div className="font-medium">
                            <div className='text-base text-color-dark'>Rahul Vijay</div>
                            <div className='text-color-gray text-xs'>Table 2</div>
                        </div>
                    </div>
                    <span class="text-orange-400 font-semibold text-lg">&#8377; 1234</span>
                </div>
                <div class="border-t border-gray-200 mt-4 pt-4 grid grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="text-sm font-medium border-r">
                        <p><span class="text-color-gray">Booking ID:</span> <span className="text-color-black">123456789</span></p>
                        <p><span class="text-color-gray">Order No:</span> <span className="text-color-black">#320</span></p>
                    </div>
                    <div className="border-r text-sm font-medium">
                        <p><span class="text-color-gray">Payment Mode:</span> <span className="text-color-black">UPI</span></p>
                        <p><span class="text-color-gray">Discount (applied if any):</span> <span className="text-color-black">No</span></p>
                    </div>
                    <div className="ps-8 text-sm font-medium">
                        <p><span class="text-color-gray">Date:</span> <span className="text-color-black">17-12-2024</span></p>
                        <p><span class="text-color-gray">Time:</span> <span className="text-color-black">13:12:00</span></p>
                    </div>
                </div>
            </div>

        </>
    );
};
export default InvoiceCards;