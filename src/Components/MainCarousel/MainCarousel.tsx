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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);
const Preloader3 = ({resImages} : any) => {
    const router = useRouter()
    const [imgs,setImgs] = useState<any>(
    //     [
    //         {
    //             img:'https://instagram.fbey22-1.fna.fbcdn.net/v/t39.30808-6/450251622_122102107868402824_6956869894819437387_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fbey22-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZTbipEkNV-0Q7kNvgE8c9lF&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQwOTg1NTE1NzA2MjA1Nzc1NA%3D%3D.2-ccb7-5&oh=00_AYABJ39IgaPAj8soKMuWOALQNJkf8aJiOdvjSR7X6f51tQ&oe=66A28F9C&_nc_sid=8f1549'
    //         },
    //         {
    //             img:`https://ucarecdn.com/608e7e12-9c10-456e-adb4-55008d45f1c3/`
    //         },
    //         {
    //             img:`https://winnerforce-lb.com/cdn/shop/files/website_1800x800_0003_7bf94542-4185-423b-a54d-fd111ffac9fb_1400x.png?v=1716815188`
    //         },
    //  ]
    )


   
    useEffect(() => {
        if (resImages) {
            setImgs(resImages);
        }
    
        const elements = gsap.utils.toArray('.animate-on-scroll2');
        elements.forEach((element: any) => {
            gsap.fromTo(element,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        markers: false, // Set to true for debugging
                    },
                }
            );
        });
    
        // Cleanup on unmount
        return () => {
            elements.forEach((element: any) => {
                ScrollTrigger.getById(element)?.kill(); // Clean up scroll triggers
            });
        };
    }, [resImages]);

        
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
          speed={1000}
          autoplay={{
              delay: 550500,
              disableOnInteraction: true
          }}
          modules={[Autoplay,Pagination]}
          className="mySwiper swiper "
      >
          {imgs && imgs?.map((item:any) => {
            
              return (
                  <SwiperSlide className='ztop relative  ' key={`${item?.img}`}>
            
                      <Box className='animate-on-scroll2' sx={{position:'relative', height: '100%', width:'100%'}}>
                      <Box className='overlay'>
                
                </Box>
                          <img
                              className={`img cover `}
                            //   src={`${item?.img}-/resize/600/`}
                              src={`${item?.img}`}
                            //   src={`${item?.img}/-/resize/${imageSize}/`}
                              alt="Main Carousel Image"
                          />
                      </Box>
                      <Box className='absolute  animate-on-scroll2 w100  flex col' sx={{
                            transform: `translate(50%,-50%)`,
                            right: '50%',
                            top: {xs:'70%',sm:`50%`},
                            alignItems:{xs:'center',sm:'flex-end'},
                            // width: {xs:'100%',sm:'fit-content'},
                       zIndex:'1234'}}>
                            <Typography sx={{
  
  
  maxWidth:'1200px',
  pb:0,
  px:1,
  fontWeight:'300',
  fontSize:{xs:'.8em',sm:'1em'},
  }} component='h1' className='black auto white animate-on-scroll2 text-center  '>
     Timeless Elegance Awaits
  </Typography>
                            <Typography 
                            className='auto text-center'
                            component='h1'
                            sx={{
                                px:{xs:'.1em'},
                                // textAlign:{xs:'center',sm:'flex-end'},
                                pt:1,color:'white',fontSize:{xs:'1.5em',sm:'1.4em'},fontWeight:300}}>
                           Discover home decor that stands the test of time.
                            </Typography>
                            <Btn  
                            onClick={()=>router.push('/collection/products')}
                             className='center  center flex ' sx={{background:'transparent',color:'white',mt:'2em',mx:'auto'}}>
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


  