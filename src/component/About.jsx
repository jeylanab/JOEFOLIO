import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const About = () => {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kvsy2mq', 'template_c7tuctb', form.current, {
        publicKey: 'YF35tqFeJ15hQbeTr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
      <div className='p-10 lg:m-10 m-5'>
          <h1 className='whatDo font-semibold lg:text-4xl text-3xl text-center py-10'> Contact Me</h1>
         <form className='flex flex-col justify-center items-center ' ref={form} onSubmit={sendEmail}>
            <label className='whatDo '>Name</label>
            <input className='lg:w-[400px] lg:h-[40px] w-[200px]' type="text" name="user_name" />
            <label className='whatDo'>Email</label>
            <input className='lg:w-[400px] lg:h-[40px] w-[200px]'  type="email" name="user_email" />
            <label className='whatDo'>Message</label>
            <textarea className='lg:w-[400px] lg:h-[80px] w-[200px]'  name="message" />
            <input className='lg:w-[400px] bg-purple-600 lg:h-[40px] my-5 rounded-lg w-[200px] p-3 text-slate-200'    type="submit" value="Send" />
         </form>
    </div>
  )
}

export default About