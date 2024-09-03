"use client"
import { Box } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'

const Index = ({secondSectionImage} : {secondSectionImage:string}) => {
  const router = useRouter();
  return (
    <Box className='relative animate-on-scroll' sx={{}}>
        <Box sx={{width:'100%', height:'600px',display:{xs:'flex'}}}>
            <img src={`${secondSectionImage}`} alt="" className="img"  />
        </Box>
        <Box className='absolute center w100 auto flex' sx={{top:'80%',zIndeX:12}}>
          <Btn
          onClick={()=>router.push('/collection/products')}
          >
            Explore Collections Now
          </Btn>
        </Box>
       
    </Box>
  )
}

export default Index