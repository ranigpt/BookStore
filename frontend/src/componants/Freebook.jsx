import React from 'react'
import bookdetails from "../../public/booklist.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {

    const filterdata = bookdetails.filter((data)=>data.category==="free");
    console.log(filterdata);


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
    <div className='max-w-screen-2xl max-auto flex flex-col  m-10 md:m-24 my-6'>
        <div>
        <h1 className='font-semibold text-2xl'>Free offered Courses</h1>
        <p className='text-xl'> here are free courses offered by us Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda aspernatur nostrum?</p>
        </div>

<div className="slider-container">
      <Slider {...settings}>
        {filterdata.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
     
      </Slider>
    </div>
    
    </div>
  
  )
}

export default Freebook