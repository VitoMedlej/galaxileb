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
                img:`https://caseelegance.com/cdn/shop/files/Mask_Group_43_83565545-477a-4d23-8045-d3ce183b079b.png?v=1707296008&width=1500`
            },
            {
                img:'https://caseelegance.com/cdn/shop/files/Group_1089_a6967502-f359-4526-83c5-1a03b9b08b22.png?v=1707209619&width=1500'
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
          height: {xs:'500px',sm:'100%',md:'600px'},
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
                      <Box className='absolute text-center w100  ' sx={{
                            transform: `translateX(50%)`,
                        top:{xs:'10%',md:'15%'},right:'50%',zIndex:'1234'}}>
                             <Typography sx={{color:'white',fontSize:{xs:'.8em',md:'1em'},
                             fontWeight:500}}>
                                Urban Gentleman
                            </Typography>
                            <Typography sx={{pt:1,color:'white',fontSize:{xs:'1.5em',md:'2em'},fontWeight:700}}>
                            Stylish essentials for the modern man
                            </Typography>
                            <Btn  
                            onClick={()=>router.push('/collection/products')}
                            v2 className='center ' sx={{mt:'2em',mx:'auto'}}>
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


  