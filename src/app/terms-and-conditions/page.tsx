"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text = [
    "Order Confirmation:\nAll orders placed on our website are subject to confirmation and acceptance by Urban Gentleman-lb.",
  
    "Returns and Exchanges:\nWe do not accept returns.\nExchange requests are applicable within 3 days of receiving the product.\nItems must be in their original condition with tags intact for exchange eligibility.",
    
    "Exchange Process:\nTo initiate an exchange, contact our customer service within 3 days of receiving your order.\nCustomer is responsible for all shipping costs associated with exchanges.",
    
    "Shipping:\nWe aim to process and dispatch orders within 3 business days.\nShipping times may vary based on location.",
    
    "Damaged or Defective Items:\nIn the rare event of receiving damaged or defective items, please contact us immediately for assistance.",
    
    "Cancellation Policy:\nOrders can be canceled within 24 hours of placement by contacting customer service.",
    
    "Product Availability:\nAll products are subject to availability. In the event of unavailability after order placement, we will notify you and offer alternatives or a refund.",
    
    "Intellectual Property:\nAll content on this website, including images and text, is the property of Urban Gentleman-lb",
    
    "Privacy Policy:\nYour privacy is important to us. Refer to our Privacy Policy for details on how we collect, use, and protect your information."
]
const Index = () => {
  return (
    <Container sx={{mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,fontWeight:600,fontSize:'2em'}}>
            Terms And Conditions
        </Typography>
        <Box>
            {
                text.map(i=>{
                    return <Typography sx={{maxWidth:'md',my:1}} key={i}>
                        {i}
                    </Typography>
                })
            }
        </Box>
        <Box>
            <Link href='/privacy-policy'>
                Privacy Policy
            </Link>
        </Box>
    </Container>
  )
}

export default Index