"use client"
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
  `Welcome to Galaxi, where style meets quality and customization knows no bounds! Based in Lebanon, we are your go-to online store for a diverse range of high-quality clothing and custom accessories. From trendy apparel to personalized mugs, tumblers, and hats, we offer products that reflect your unique style and preferences.`,
  
  `Why Choose Galaxi?`,
  
  `At Galaxi, we pride ourselves on offering not just products, but experiences. Our collection features:`,
  
  `Fashion-Forward Clothing: Whether you're a fan of the Lakers or an aficionado of NBA teams, we have apparel that lets you flaunt your support with pride. Our range includes exclusive shirts and tees designed for true sports enthusiasts. Not a Lakers fan? No problem! Explore our collection and find something that resonates with you.`,
  
  `Custom Accessories: Looking for something personalized? Galaxi specializes in custom mugs, tumblers, and hats that are perfect for gifts or personal use. Whether you want to showcase your favorite quote or design, our customization options ensure your items are as unique as you are.`,
  
  `Uncompromising Quality: We believe in delivering only the best. Each item in our store undergoes rigorous quality checks to ensure durability and satisfaction. Trust Galaxi to provide products that not only look good but feel good too.`,
  
  `Discover the Galaxi Difference`,
  
  `Our commitment is to make your online shopping experience in Lebanon seamless and enjoyable. From the moment you browse our site to the instant your package arrives at your doorstep, we focus on excellence. Trust Galaxi to elevate your wardrobe and home with our high-quality, customizable products.`,
  
  `Explore our range today and find out why Galaxi is Lebanon's top choice for fashion and customization. Experience the blend of quality and style with every purchase. Shop with us and let your individuality shine!`,
  
  `Galaxi - Where Your Style Meets the Stars`
]
const Index = () => {
  return (
    <Container maxWidth='lg'  sx={{mt:'8em',mx:'auto',py:4}}>
           <Typography 
           component='h1'
           sx={{mb:1,mx:'auto',fontSize:'2em',fontWeight:'600'}} className=" center text-center">
            Galaxi - Your Premier Online Shopping Destination in Lebanon
        </Typography>

    
        <Box sx={{ my: 4 }}>
  {
    text.map((line, index) => (
      <Typography 
        key={index} 
        sx={{ maxWidth: 'md', py: 1 }} 
        className='auto text-center'
      >
        {line}
      </Typography>
    ))
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