import React from 'react';
import './sliderComponent.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComponent = ({ item }) => {

    if (!item) return;

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 4200,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        cssEase: 'ease'
    };

    return (
        <Slider {...settings} autoplay={true}>
            {item}
        </Slider>
    )
}

export default SliderComponent;
