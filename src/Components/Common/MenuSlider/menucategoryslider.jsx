import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import Menu1 from "../../Assets/Images/menuCategory/menu1.png";
import Menu2 from "../../Assets/Images/menuCategory/menu2.png";
import Menu3 from "../../Assets/Images/menuCategory/menu3.png";

const MenuSlider = () => {
    var settings = {
        dots: false,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="slider-container">
                <h1 className="font-bold text-lg border-t-2">Categories</h1>
                <Slider {...settings}>
                    <div className="mx-3">
                        <h3>1</h3>
                        <img src={Menu1} alt="Loading" />
                        <p>Starters</p>
                    </div>
                    <div className="mx-3">
                        <h3>2</h3>
                        <img src={Menu2} alt="Loading" />
                        <p>Breads</p>
                    </div>
                    <div className="mx-3">
                        <h3>3</h3>
                        <img src={Menu3} alt="Loading" />
                        <p>Paneer</p>

                    </div>
                    <div className="mx-3">
                        <h3>4</h3>
                        <img src={Menu1} alt="Loading" />
                        <p>Chinese</p>

                    </div>
                    <div className="mx-3">
                        <h3>5</h3>
                        <img src={Menu2} alt="Loading" />
                        <p> Thali</p>
                    </div>
                    <div className="mx-3">
                        <h3>6</h3>
                        <img src={Menu1} alt="Loading" />
                       <p> Desserts</p>
                    </div>
                    <div className="mx-3">
                        <h3>7</h3>
                        <img src={Menu3} alt="Loading" />
                       <p>Chinese</p>
                    </div>
                    <div className="mx-3">
                        <h3>8</h3>
                        <img src={Menu2} alt="Loading" />
                       <p>Paneer</p>
                    </div>
                    <div className="mx-3">
                        <h3>9</h3>
                        <img src={Menu3} alt="Loading" />
                       <p>Chinese</p>
                    </div>
                    <div className="mx-3">
                        <h3>10</h3>
                        <img src={Menu2} alt="Loading" />
                        <p>Breads</p>
                    </div>
                </Slider>
            </div>
        </>
    );
};
export default MenuSlider;