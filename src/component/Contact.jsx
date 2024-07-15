import React from 'react'

// contact component of the app

const Contact = () => {
  return (
    <div className='text-white m-10'> 
      <div className='text-white title myshadow text-center m-10'> Get in touch with Me</div>
      <div className=' lg:flex md:flex block justify-center items-center m-10'>
        <div className='card-contact'>
          <img src="" alt="" />
          <h1>Email</h1>
          <p>contact me on joephoenix755@gmail.com</p>
        </div>
        <div className='card-contact'>
            <img src="" alt="" />
            <h1>Email</h1>
            <p>contact me on joephoenix755@gmail.com</p>
        
        </div>
        <div className='card-contact'>
            <img src="" alt="" />
             <h1>Email</h1>
             <p>contact me on joephoenix755@gmail.com</p>
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center bg '>
        <div className='my-5 '>
          <label>Name:</label>
          <input className='block' type="text" />
        </div>
        <div className=' my-5'>
          <label>Email:</label>
          <input className='block' type="text" />
        </div>
         <div className=' my-5'>
          <label>Message:</label>
          <textarea className='block' cols="23" rows="5"></textarea>
         
        </div>
        <button className='btn-3 w-[205px] m-4'>Send Message</button>
        
      </div>
      
      <div>
        
      </div>
    
    
    </div>
  )
}

export default Contact