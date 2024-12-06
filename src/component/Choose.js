import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'


const Choose = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

   const settings2 = {
    dots: false,
    infinite: true,
  autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className='main_choose mt-5 pb-5'>
  <div className='container col-8 pt-5 '>
    <h3 className='addition_pageHead'>why should you choose Hexnode ?</h3>
<div className='testi'>
   <Slider {...settings}>
      <div>
        <div className='backgroundWhite row mt-5'>
        <div className='col-lg-4'>
    <img src={require('../assets/justinmodrak.webp')} className='img-fluid justin_image' alt='' />
        </div>

        <div className='col-lg-8 d-flex justify-content-center align-items-start flex-column'>

            <h3 className='hexnodejustin_head'>
                "Hex node is of great value. Works great with Android and iOS!".
            </h3>

             <div className='borderbottom_justin'></div>

            <p className='justin_name mt-4 mb-0'>
                Justin Modrak
            </p>
            <p className='justin_describe'>
                Technoology Coordinator<br />
                East Troy Community School District
            </p>
        </div>
        
        </div>
      </div>
      <div>
   <div className='backgroundWhite row mt-5'>
        <div className='col-lg-4'>
    <img src={require('../assets/daliborkruljac.webp')} className='img-fluid justin_image' alt='' />
        </div>

        <div className='col-lg-8 d-flex justify-content-center align-items-start flex-column'>

            <h3 className='hexnodejustin_head'>
                ""Most complete MDM solution I found, and I tested many of them, including major names"".
            </h3>

             <div className='borderbottom_justin'></div>

            <p className='justin_name mt-4 mb-0'>
            Dalibor Kruljac
            </p>
            <p className='justin_describe'>
         KAMELEYA LTD
            </p>
        </div>
        
        </div>
      </div>
      <div>
    <div className='backgroundWhite row mt-5'>
        <div className='col-lg-4'>
    <img src={require('../assets/chrisrobinson.webp')} className='img-fluid justin_image' alt='' />
        </div>

        <div className='col-lg-8 d-flex justify-content-center align-items-start flex-column'>

            <h3 className='hexnodejustin_head'>
                ""It seemed to be in-line with everything we were looking at."".
            </h3>

             <div className='borderbottom_justin'></div>

            <p className='justin_name mt-4 mb-0'>
Chris Robinson
            </p>
            <p className='justin_describe'>
 Executive Account Manager, NCS
            </p>
        </div>
        
        </div>
      </div>
    </Slider>
    </div>
    </div>


<div className='testimonials container-fluid col-9 mt-5'>
 <div className="slider-container pt-4 ">
      <Slider {...settings2} className=''>
        <div>
          <img src={require('../assets/group1.webp')} alt='' className='img-fluid' />
        </div>
        <div>
          <img src={require('../assets/group2.webp')} alt='' className='img-fluid' />
        </div>
        <div>
         <img src={require('../assets/group3.webp')} alt='' className='img-fluid' />
        </div>
        <div>
       <img src={require('../assets/group4.webp')} alt='' className='img-fluid' />
        </div>
        <div>
        <img src={require('../assets/group5.webp')} alt='' className='img-fluid' />
        </div>
        <div>
         <img src={require('../assets/group6.webp')} alt='' className='img-fluid' />
        </div>
        <div>
         <img src={require('../assets/group7.webp')} alt='' className='img-fluid' />
        </div>
        <div>
         <img src={require('../assets/group8.webp')} alt='' className='img-fluid' />
        </div>
        <div>
         <img src={require('../assets/group9.webp')} alt='' className='img-fluid' />
        </div>
      </Slider>
    </div>
</div>

    </div>
  
    
  )
}

export default Choose