"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import ImageZoom from "react-image-zooom";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box } from "@mui/material";
// import { Box } from "@mui/material";

export default function App({images,index,setSwiper}:{setSwiper?:any,index?:number,images:string[] | []| undefined}) {
  return (
    <Box sx={{width:'100%',maxWidth:'600px',height:{xs:'100%'}}} className='auto'  >
      <Swiper
      onSwiper={setSwiper}
        spaceBetween={30}
        effect={"fade"}
        autoplay={
          {delay:50000000}
        }
        navigation={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[
          // Autoplay,
          Navigation,
          Pagination]}
        className="mySwiper"
      >
{
          images && images.map(img=>{
            return    <SwiperSlide key={img}>
              <Box sx={{height:{xs:'500px',md:'600px'}}}>

            <img className='img contain' src={`${img}`} alt={'Product Image'} />
              </Box>
          </SwiperSlide>
          })
        }

{/* {
   images && images.map(img=>{
    return  <SwiperSlide key={img}>

    
    <InnerImageZoom zoomScale={0.5}  src={img} zoomSrc={img} />
    </SwiperSlide>
    }) 
} */}
{/* {
     images && images.map(img=>{
      if (!img) return;
      return  <SwiperSlide key={`${img}`}>
  
      
      <ImageZoom  src={`${img}`} zoom={200} />
      </SwiperSlide>
      }) 
   
} */}
      </Swiper>
    </Box>
  );
}