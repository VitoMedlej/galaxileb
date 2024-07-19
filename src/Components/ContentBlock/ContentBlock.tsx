"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'

const ContentBlock = ({href,img,title,text,category,CTA} : {
    href : string,
    img:string,
    title   : string,
    text : string,
    category ?: string,
    CTA : string,
}) => {
    const router = useRouter()
  return (
    <Box className='animate-on-scroll' sx={{mb:7}}>
        <Box>
            <img src={img} alt="" className="img" />
        </Box>
        <Box>
            <Typography sx={{py:1,fontSize:{xs:'1.4em',sm:'1.5em'},fontWeight:500}} className=''>
                {title}
            </Typography>
            <Typography className='' sx={{fontSize:{xs:'.85em',sm:'.9em'}}}>
                {text}
            </Typography>
            <Btn sx={{my:2}} onClick={()=>router.push(`${href}`)} >
                {CTA}
            </Btn>
        </Box>
    </Box>
  )
}

export default ContentBlock