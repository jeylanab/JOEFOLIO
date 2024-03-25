import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {  html, javascript, css, adobexd, figma, jquery, react,  tailwind,  vue } from './index'




const Skill = () => {
  return (
      <div className='mt-10 py-10'>
          <div className='skill flex justify-center items-center'>
              <div className='skillTitle'>
                  <h1 className='whatDo font-semibold lg:text-4xl text-3xl'>Skills</h1>
              </div>
              
          </div>
          <div className=' flex items-center justify-center'>
                    <Swiper className= 'mySkill'
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                   
                >
                  <SwiperSlide className='mySkillSwiper'>
                      <img src={html} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                      <img src={  css } />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                      <img src={ javascript} />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                    <img src={react} />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                    <img src={jquery} />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                    <img src={vue} />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                      <img src={ tailwind} />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                      <img src={figma } />
                    </SwiperSlide>
                    <SwiperSlide className='mySkillSwiper'>
                      <img src={adobexd } />
                    </SwiperSlide>
                </Swiper>
            
          </div>
         
          



     </div>
  )
}

export default Skill