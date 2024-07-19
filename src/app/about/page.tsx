"use client"
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
 `Welcome to Urban Gentleman, where tradition meets contemporary style in the heart of Lebanon. We specialize in crafting personalized, handcrafted bags that celebrate the rich heritage and artistry of Lebanese craftsmanship. Each bag is meticulously designed and made by skilled artisans who pour their passion and expertise into every piece.`,
  ` At Urban Gentleman, we believe in the power of personalization. Our diverse collection offers something for everyone, from elegant clutches to versatile totes, each customizable to reflect your unique taste. Our commitment to quality ensures that every bag not only looks beautiful but also stands the test of time.`,
  `Based in Beirut, Urban Gentleman is more than just a brand; it’s a celebration of Lebanese culture and a testament to our dedication to excellence. We invite you to explore our collection and experience the perfect blend of tradition and modernity. Carry a piece of Lebanon with you, wherever you go, with Urban Gentleman.`
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{py:4}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'200px'}}>
            <img src="https://ucarecdn.com/67d27952-152a-456f-ab9f-b99e9c566f10/-/resize/300/" alt="" className="img contain" />
        </Box>
    
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