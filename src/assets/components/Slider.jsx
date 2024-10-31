import React from 'react';
import Slider from 'react-slick';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { practices } from '../constants/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer  bg-black rounded-full p-2"
      onClick={onClick}
    >
      <ArrowForward style={{ fontSize: '30px', color: 'white' }} />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black rounded-full p-2"
      onClick={onClick}
    >
      <ArrowBack style={{ fontSize: '30px', color: 'white' }} />
    </div>
  );
};

const ImageSlider = () => {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-9 xl:mt-24 lg:mt-20 md:mt-16 sm:mt-14 max-sm:mt-11">
         <h1 className='text-4xl font-bold font-serif'>
        YOU MAY ALSO LIKE
      </h1>
      <Slider {...settings}>
        {practices.map((slide, index) => (
          <div key={index} className="p-6">
            <div className="bg-white p-4 flex flex-col items-center">
              <img src={slide.imgSrc} alt={slide.title} className="w-full  h-[360px] object-cover" />
              <div className="text-center py-4">
                <p className="text-lg font-semibold">{slide.title}</p>
                <p className="text-xl font-bold">{slide.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
