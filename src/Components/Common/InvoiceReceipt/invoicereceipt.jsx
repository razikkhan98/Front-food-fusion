import React from 'react'
import Button from '../button/button';

const InvoiceReceipt = () => {
    return (
        <>
            <div class="max-w-xs h-5/6 mx-auto bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center">
                <div class="bg-gray-100 w-full p-4 rounded-lg text-center border-gray-400 mb-6">
                    <p class="text-2xl font-medium tracking-wider text-color-gray">RECEIPT</p>
                    <hr class="my-2 border-dashed border-gray-400" />
                    <p class="text-gray-600 text-sm">01234, Lorem ipsum, Dolor, 10/6</p>
                    <p class="text-gray-600 text-sm">012 345 678 90</p>
                    <hr class="my-2 border-dashed border-gray-400" />

                    <div class="w-full text-sm text-gray-700 py-2">
                        <div class="flex justify-between"><span>Lorem ipsum</span><span>2.50</span></div>
                        <p class="text-xs text-gray-500">1x100</p>
                        <div class="flex justify-between"><span>Dolor sir amet</span><span>6.25</span></div>
                        <p class="text-xs text-gray-500">2x100</p>
                        <div class="flex justify-between"><span>Consectetur</span><span>3.50</span></div>
                        <p class="text-xs text-gray-500">2x100</p>
                        <div class="flex justify-between"><span>Adipiscing</span><span>4.70</span></div>
                        <p class="text-xs text-gray-500">1x100</p>
                        <div class="flex justify-between"><span>Elusmod tempor</span><span>8.10</span></div>
                        <p class="text-xs text-gray-500">3x100</p>
                        <div class="flex justify-between"><span>Incididunt</span><span>7.15</span></div>
                        <p class="text-xs text-gray-500">1x100</p>
                        <hr class="my-2 border-dashed border-gray-400" />
                        <div class="flex justify-between font-semibold"><span>TOTAL AMOUNT:</span><span>32.20</span></div>
                        <div class="flex justify-between"><span>CASH:</span><span>40.00</span></div>
                        <div class="flex justify-between"><span>CHANGE:</span><span>7.80</span></div>
                    </div>
                </div>
                {/* <div className='py-5 px-0'> */}
                <Button title={"Print Invoice"} />
                <Button title={"Edit Invoice"} />
                {/* </div> */}

            </div>

        </>
    );
};

export default InvoiceReceipt;