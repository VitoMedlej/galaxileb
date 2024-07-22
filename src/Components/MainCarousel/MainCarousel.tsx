"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Btn from '../Btn/Btn';





const Preloader3 = ({resImages} : any) => {
    const router = useRouter()
    const [imgs,setImgs] = useState<any>(
        [
            {
                img:`https://winnerforce-lb.com/cdn/shop/files/website_1800x800_0003_7bf94542-4185-423b-a54d-fd111ffac9fb_1400x.png?v=1716815188`
            },
            {
                img:'https://instagram.fbey22-1.fna.fbcdn.net/v/t39.30808-6/450251622_122102107868402824_6956869894819437387_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fbey22-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZTbipEkNV-0Q7kNvgE8c9lF&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQwOTg1NTE1NzA2MjA1Nzc1NA%3D%3D.2-ccb7-5&oh=00_AYABJ39IgaPAj8soKMuWOALQNJkf8aJiOdvjSR7X6f51tQ&oe=66A28F9C&_nc_sid=8f1549'
            }
     ]
    )


    useEffect(() => {
      
    
      if (resImages) {
        setImgs(resImages)
      }
    }, [])
    

        
    return (
      <Box
      sx={{
          width:'100%',
          transform:'translateY(-1px)',
          maxWidth:'none',
          height: {xs:'85vh',sm:'100%',md:'600px'},
          margin: '0 auto',
        //   mt:'1em',
          display: {xs: 'flex'}
      }}
  >
      <Swiper
          pagination={true}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
              delay: 3022200,
              disableOnInteraction: false
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper swiper "
      >
          {imgs && imgs?.map((item:any) => {
            
              return (
                  <SwiperSlide className='ztop relative ' key={`${item?.img}`}>
            
                      <Box sx={{position:'relative', height: '100%', width:'100%'}}>
                      <Box className='overlay'>
                
                </Box>
                          <img
                              className={`img `}
                              src={`${item?.img}-/resize/600/`}
                            //   src={`${item?.img}/-/resize/${imageSize}/`}
                              alt="Main Carousel Image"
                          />
                      </Box>
                      <Box className='absolute  animate-on-scroll  flex col' sx={{
                            transform: `translateY(-50%)`,
                            right: 0,
                            top: {xs:'70%',sm:`50%`},
                            alignItems:{xs:'center',sm:'flex-end'},
                            width: {xs:'100%',sm:'fit-content'},
                            padding: {xs:'0 .15em',sm:'0 2em'},
                       zIndex:'1234'}}>
                            
                            <Typography sx={{
                                px:{xs:'.1em'},
                                textAlign:{xs:'center',sm:'flex-end'},
                                pt:1,color:'white',fontSize:{xs:'1.35em',md:'2em'},fontWeight:300}}>
                            Embrace the power of movement with Shield.
                            </Typography>
                            <Btn  
                            onClick={()=>router.push('/collection/products')}
                            v2 className='center ' sx={{mt:'1em',mx:''}}>
                                Shop Now
                            </Btn>
                      </Box>
                  </SwiperSlide>
              )
          })}
      </Swiper>
  </Box>
  
    )
}

export default Preloader3


  