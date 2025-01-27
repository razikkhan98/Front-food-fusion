import React from 'react'
import Button  from '../Button/button';

const OrderSideMenu = () => {
    return (
        <>
            <div className='App h-full py-6 px-6 bg-white'>
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl">
                    <div className='cashier-light-bg-color rounded-t-2xl p-2'>
                        <div className="flex justify-between text-sm font-semibold text-gray-700">
                            <span>For: <strong>Mr. Rahul Vijay</strong></span>
                            <span className="bg-orange-200 px-2 py-1 rounded">Table No 12</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Order No: <strong>#123</strong></div>
                        <div className="text-xs text-gray-500 mt-1 text-right">05:22</div>
                    </div>

                    <div className="flex justify-between mt-2 border-b pb-2">
                        <button className="w-1/3 text-center font-medium text-orange-500 border-b-2 border-orange-500 pb-2">Dine In</button>
                        <button className="w-1/3 text-center font-medium text-gray-400">Take Away</button>
                        <button className="w-1/3 text-center font-medium text-gray-400">Delivery</button>
                    </div>

                    <div className="flex justify-between mt-2 text-sm px-4">
                        <span className="flex items-center space-x-1">
                            <span className="text-red-500">🔴</span>
                            <span>Discount & Offers</span>
                        </span>
                        <span className="flex items-center space-x-1">
                            <span className="text-yellow-500">🟡</span>
                            <span>Reward Points</span>
                        </span>
                        <span className="flex items-center space-x-1">
                            <span className="text-yellow-500">🟡</span>
                            <span>Payment Pending</span>
                        </span>
                    </div>

                    <div className="mt-4 space-y-4 px-4 overflow-y-scroll">
                        {[{ name: "Veg Pizza", qty: 2, price: 360 }, { name: "French Fries", qty: 1, price: 180 }, { name: "Vegetable Soup", qty: 2, price: 360 }].map((item, index) => (
                            <div key={index} className="border-b pb-2">
                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">{index + 1}. {item.name}</span>
                                    <span className="flex items-center justify-center rounded cashier-light-bg-color p-0.5">
                                        <button className="bg-white px-2 rounded">-</button>
                                        <span className="mx-2">{item.qty}</span>
                                        <button className="bg-white px-2 rounded">+</button>
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500">Notes: Make it more cheesy</div>
                                <div className="text-right font-semibold">₹ {item.price}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-between items-center px-4">
                        <span className="text-gray-700">🛍️ Food Fest Friday (-20%)</span>
                        <button className="text-orange-500">Apply</button>
                    </div>

                    <div className="mt-4 text-right px-4">
                        <div className="text-gray-700">Subtotal (3 items): <strong>₹ 900</strong></div>
                        <div className="text-gray-700">Tax (10%): <strong>₹ 90</strong></div>
                    </div>

                    <div className="mt-4 text-center">
                        <Button title="Generate Order" />
                        <Button title="Send To Kitchen" />
                        <Button title="Save & Settle Bill" />
                        <Button title="Generate Invoice" />


                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderSideMenu;
