import React, { useState } from 'react'

const AdditionSection = () => {

  const [count,setCount]=useState(1);

  const handleClick=(i)=>{
     setCount(i)
  }


  return (
    <div className='container-fluid col-lg-9 my-5'>
    <div className='col-12'>
   <h3 className='addition_pageHead pt-5'>
            What additional possibilities does the Kiosk mode offer?
        </h3>
    </div>
     
  

          <div className='row d-flex justify-content-start align-items-center mt-5'>
            <div className='col-lg-6 col-12 '>
    <div className={count===1 ? "main_phonebase show center-block d-block mx-auto" :"hide"} >
                <img src={require('../assets/phone.webp')} alt='' className='img-fluid imagesphonebase' />
                <div className='phonebaseBackground px-3 py-2'>
                     <i class="bi bi-check2 mx-3"></i>
                     <p className='touchparaa mb-0'>Zero touch kiosk</p>
                </div>
            </div>
         
    <div className={count===2 ? "main_phonebase show center-block d-block mx-auto" :"hide"} >
                <img src={require('../assets/phone1.webp')} alt='' className='img-fluid imagesphonebase' />
                <div className='phonebaseBackground px-3 py-2'>
                     <i class="bi bi-check2 mx-3"></i>
                     <p className='touchparaa mb-0'>Brand Visibility</p>
                </div>
            </div>
    <div className={count===3 ? "main_phonebase show center-block d-block mx-auto" :"hide"} >
                <img src={require('../assets/phone2.webp')} alt='' className='img-fluid imagesphonebase' />
                <div className='phonebaseBackground px-3 py-2'>
                     <i class="bi bi-check2 mx-3"></i>
                     <p className='touchparaa mb-0'>Data Secuirity</p>
                </div>
            </div>
    <div className={count===4 ? "main_phonebase show center-block d-block mx-auto" :"hide"} >
                <img src={require('../assets/phone3.webp')} alt='' className='img-fluid imagesphonebase' />
                <div className='phonebaseBackground px-3 py-2'>
                     <i class="bi bi-check2 mx-3"></i>
                     <p className='touchparaa mb-0'>App Management</p>
                </div>
            </div>
    <div className={count===5 ? "main_phonebase show center-block d-block mx-auto" :"hide"} >
                <img src={require('../assets/phone4.webp')} alt='' className='img-fluid imagesphonebase' />
                <div className='phonebaseBackground px-3 py-2'>
                     <i class="bi bi-check2 mx-3"></i>
                     <p className='touchparaa mb-0'>Easy to use interface</p>
                </div>
            </div>
            </div>

           <div className='col-lg-6 col-12'>
  <div className='d-flex justify-content-start align-items-start flex-column'>

          <div className='mt-4'>
  <button onClick={()=>handleClick(1)} className='additional_head'>
    Effortless kiosk deployment & management
  </button>
      <div className={count===1 ? "show":"hide"}>
              <p className='mt-3 para_additional'>
                Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.
              </p>
              <a href='#' className='anchor_additional'>
                TRY FOR FREE <i class="bi bi-chevron-right"></i>
              </a>
        </div>
           <hr />
          </div>
 
 <div  className='mt-4'>
<button onClick={()=>handleClick(2)}  className='additional_head'>
  Customized interface for brand visibility
</button>
    
        <div className={count===2 ? "show":"hide"}>
              <p className='mt-3 para_additional'>
                Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.
              </p>
                <a href='#' className='anchor_additional'>
                TRY FOR FREE <i class="bi bi-chevron-right"></i>
              </a>
        </div>
            <hr />
 </div>   
        
        <div className='mt-4'>
        <button onClick={()=>handleClick(3)}  className='additional_head'>
          What more can you do with Hexnode kiosk?
        </button>
               <div className={count===3 ? "show":"hide"}>
              <p className='mt-3 para_additional'>
                Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.
              </p>
                <a href='#' className='anchor_additional'>
                TRY FOR FREE <i class="bi bi-chevron-right"></i>
              </a>
        </div>
            <hr />
        </div>
        
        <div className='mt-4'>
        <button onClick={()=>handleClick(4)}  className='additional_head'>
         Secure and update your app ecosystem
        </button>
               <div className={count===4 ? "show":"hide"}>
              <p className='mt-3 para_additional'>
                Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.
              </p>
                <a href='#' className='anchor_additional'>
                TRY FOR FREE <i class="bi bi-chevron-right"></i>
              </a>
        </div>
            <hr />
        </div>
        
        <div className='mt-4'>
        <button onClick={()=>handleClick(5)}  className='additional_head'>
    Provide an easy-to-use interface for end-users
        </button>
               <div className={count===5 ? "show":"hide"}>
              <p className='mt-3 para_additional'>
                Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.
              </p>
               <a href='#' className='anchor_additional'>
                TRY FOR FREE <i class="bi bi-chevron-right"></i>
              </a>
        </div>
            <hr />
        </div>

          </div>
           </div>

          </div>
    </div>
  )
}

export default AdditionSection