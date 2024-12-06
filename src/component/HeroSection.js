import React from 'react'
import Header from './Header';


const HeroSection = () => {
  return (

   <>

        <Header />
   <div className='nav_main'>


        <div className='hero_sec container-fluid col-9 '>
        <div className='row d-flex justify-content-start align-items-center'>
            <div className='col-lg-6 col-12'>
                  <h3 className='hero_header'>
            Turn your devices into kiosks in a few minutes with Hexnode UEM
           </h3> 
            </div>
            <div className='col-lg-6 col-12'>
             <img src={require('../assets/heroimage.webp')} alt='' className='hero_images right-block d-block ms-auto' />
            </div>
        </div>
        
           
        </div>
             

             <div className='hero_bottom_sec p-4'>
   <div className='container-fluid col-9'>
           <div className='row  d-flex justify-content-center align-items-center'>
            <div className='col-lg-4'>
            <div className='row'>
                <div className='col-lg-10'>
    <img src={require('../assets/forrester_logo.png')} alt='' className='img-fluid idc_image' />
             <p className='herosecdown_parra mt-3'>
              "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023." 
             </p> 
                </div>
                  <div className='col-lg-2'>
               <div className='header_right'></div>
            </div>
            </div>
             
            </div>
            <div className='col-lg-4'>
            <div className='row'>
                <div className='col-lg-10'>
    <img src={require('../assets/forrester_logo.png')} alt='' className='img-fluid idc_image' />
             <p className='herosecdown_parra mt-3'>
              "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023." 
             </p> 
                </div>
                  <div className='col-lg-2'>
               <div className='header_right'></div>
            </div>
            </div>
             
            </div>
            <div className='col-lg-4'>
            <div className='row'>
                <div className='col-lg-10'>
    <img src={require('../assets/forrester_logo.png')} alt='' className='img-fluid idc_image' />
             <p className='herosecdown_parra mt-3'>
              "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023." 
             </p> 
                </div>
                  
            </div>
             
            </div>
                
           </div>
        </div>
             </div>
     

    </div>

   </>

 
  )
}

export default HeroSection