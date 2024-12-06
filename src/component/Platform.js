import React from 'react'

const Platform = () => {
  return (
    <div className='container-fluid col-8 mt-5 pb-5'>
        <h4 className='addition_pageHead pt-5 '>Platform Supported</h4>

        <div className='d-flex justify-content-between align-items-center mt-5'>
            <img src={require('../assets/android.webp')} className='img-fluid platform_images' alt=''/>
            <img src={require('../assets/windows.webp')} className='img-fluid platform_images' alt=''/>
            <img src={require('../assets/ios.webp')} className='img-fluid platform_images' alt=''/>
            <img src={require('../assets/android-tv.webp')} className='img-fluid platform_images' alt=''/>
            <img src={require('../assets/amazon-fire.webp')} className='img-fluid platform_images' alt=''/>
        </div>
    </div>
  )
}

export default Platform