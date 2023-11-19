"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import b1Food from "../../../public/image/ba1.png"
import b2Food from "../../../public/image/ba2.png"
import Image from 'next/image';


export default function HeaderSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <ul className='slides'>
          <li>
            <SwiperSlide className='swipersli' style={{margin: "0"}}>
              <div className='fundoImagem'>
                <Image
                src={b1Food}
                style={{width: "100%", height: "100vh", objectFit: "cover"}}
                className='imageBg'
                />                
             </div>
            </SwiperSlide>
          </li>
          <li>
            <SwiperSlide className='swipersli' style={{margin: "0"}}>
              <div className='fundoImagem'>
              <Image
                src={b2Food}
                style={{width: "100%", height: "100vh",  objectFit: "cover"}}
                className='imageBg'
                />              
            </div>
            </SwiperSlide>
          </li>
        </ul>
        

      </Swiper>
      <div className='inner-hero'>
        <div className='containere hero-container'>
          <div>
            <h1 style={{color: "white"}}>Bem-Vido ao RestoNome</h1>
            <p class=" text-white text-uppercase font-weight-700 font-size-13 letter-spacing-medium mb-0">Restaurante<span class="circle-divider">·</span>Cafe<span class="circle-divider">·</span>Bar<span class="circle-divider">·</span>24/7
                        </p>
          </div>
        </div>
      </div>
    </>
  );
}
