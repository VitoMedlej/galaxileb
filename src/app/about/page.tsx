"use client"
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
`Crafting Modern Spaces with Timeless Metalwork`,
,`At E.Architecture, we believe that great design transcends trends. Our mission is to create furniture and home accessories that seamlessly blend modern aesthetics with enduring quality. Every piece we produce is a testament to our dedication to craftsmanship, ensuring it not only looks stunning but also stands the test of time.`
,`Founded on the principles of innovation and precision, E.Architecture brings a fresh perspective to home decor. Our team of skilled artisans and designers work together to transform raw metal into functional art. From the drawing board to the final product, every step is meticulously planned and executed with care.`
,`We specialize in creating furniture and accessories that enhance the beauty of your home while offering practicality. Whether it’s a sleek coat hanger that adds a touch of elegance to your entryway or custom shelves that make your bathroom both stylish and functional, our products are designed with you in mind.`
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{py:4}}>
           <Typography 
           component='h1'
           sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US | E.Architecture
        </Typography>

    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} 
                            sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        {/* <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/> */}
    </Container>
  )
}

export default Index