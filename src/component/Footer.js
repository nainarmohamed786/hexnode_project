import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer_main mt-5'>
    <div className='container-fluid col-8 p-5'>
    <h2 className='footer_signparra text-center'>
       Sign up and try Hexnode free for 14 days!
 </h2>
 <div className='d-flex justify-content-center align-items-center mt-4'>
    <input type='email' className='footerInput' placeholder='Your Work email' required/>
    <button className='button_pink mx-3'>
        Get Started
    </button>
 </div>

   <p className='footer_content text-center mt-4'>
    No credit cards required. <span className='pinkvarient'>
Request a demo <i class="bi bi-chevron-right"></i>
    </span> 
   </p>
    </div>
   

    </div>

    <div className='container-fluid col-9 p-3 d-flex justify-content-between align-items-center'>
        <p className='footer_terms mb-0'>
            Terms of Use - Privacy - Cookies
        </p>
        <p className='footer_terms mb-0'>
        Copyright © 2024 Mitsogo Inc. All Rights Reserved.
        </p>
    </div>
    </>

  )
}

export default Footer