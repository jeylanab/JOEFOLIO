import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';



const ToDo = () => {
    return (<div>

          <div className='title flex justify-center items-center my-10'>
              <h2 className='whatDo font-semibold lg:text-4xl text-3xl p-5'>What I Will Do</h2>
          </div>
      
  
      <div className='toDo  sm:flex '>
          
          
          <div className=' sm:w-[50vw] '>
          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
              <SwiperSlide>
                  <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Responsive Web Development</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Crafting adaptive, high-performance websites for seamless user experiences across devices.</p>
                      </div>
                  </div>
                 
                  
              </SwiperSlide>
              <SwiperSlide>
              <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>React Development</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Building dynamic, scalable web applications with React.js for enhanced interactivity.</p>
                      </div>
                  </div>
            </SwiperSlide>
              <SwiperSlide>
                 <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>UI/UX Design</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Designing intuitive, conversion-driven interfaces through user-centric research and prototyping.</p>
                      </div>
                  </div>
            </SwiperSlide>
        <SwiperSlide> <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Custom Web Applications</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Tailoring bespoke web solutions to meet unique client requirements and objectives.</p>
                      </div>
                  </div></SwiperSlide>
        <SwiperSlide> <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Cross-Browser Compatibility</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Ensuring consistent functionality and usability across all major web browsers and platforms.</p>
                      </div>
                  </div></SwiperSlide>
        <SwiperSlide> <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Performance Optimization</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Optimizing frontend code and assets to boost website speed and efficiency.</p>
                      </div>
                  </div></SwiperSlide>
        <SwiperSlide> <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Accessibility Compliance</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Creating accessible web experiences that meet WCAG standards for inclusivity.</p>
                      </div>
                  </div></SwiperSlide>
        <SwiperSlide> <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Collaborative Workflows</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Facilitating seamless collaboration with agile methodologies and version control systems.</p>
                      </div>
                  </div></SwiperSlide>
        <SwiperSlide> <div className='flex justify-center items-center text-center'>
                      <div>
                          <h2>Continuous Improvement</h2>
                          <p className='text-base font-poppins text-sm  my-10'>Staying updated on industry trends and refining skills for ongoing excellence.



                         </p>
                      </div>
                  </div></SwiperSlide>
        </Swiper>
              
          </div>
            <div>
                ehllodsfg
              
          </div>

          



        </div>
 </div>
  )
}

export default ToDo