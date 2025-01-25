import React from 'react'
import Slider from "react-slick";
const MenuDetailsCardSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='bg-white border-2 border-orange-300 p-4'>
                        <h3>1</h3>
                    </div>
                    <div className='bg-white border-2 border-orange-300 p-4'>
                        <h3>2</h3>
                    </div>
                    <div className='bg-white border-2 border-orange-300  p-4'>
                        <h3>3</h3>
                    </div>
                    <div className='bg-white border-2 border-orange-300  p-4'>
                        <h3>4</h3>
                    </div>
                    <div className='bg-white border-2 border-orange-300 p-4'>
                        <h3>5</h3>
                    </div>
                    <div className='bg-white border-2 border-orange-300 p-4'>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default MenuDetailsCardSlider;  
