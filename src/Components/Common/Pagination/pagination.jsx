import React from 'react'

const Pagination = () => {  
   
    return (
        <>
            {/* Pagination Buttons Start */}

            <div className='flex items-center mt-7'>
                <div className='flex items-center justify-between mr-7'>
                    <p className='me-3'>Rows per page</p>
                    <div>
                        <select className="custom-select px-2 py-1 border-gray-color rounded-lg text-base font-medium focus-visible:bg-white">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button className='px-3 py-1.5 bg-white border text-sm font-medium rounded-lg mr-3 text-light-gray-color'>Previous</button>
                    <button className='px-3 py-1.5 bg-white border text-sm font-medium text-color-black rounded-lg shadow-lg'>Next</button>

                </div>
            </div>
        </>
    );
};

export default Pagination;