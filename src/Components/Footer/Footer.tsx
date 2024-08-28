"use client"
import Link from 'next/link';
import {Typography , Box, Grid } from '@mui/material'
import './style.css'



const Footer = () => (
      <Box component='footer'  className=''> 
          <Grid container className='auto' sx={{py:8,px:2,maxWidth:'md'}} >
            <Grid item xs={12} sm={6} lg={6}>
              <Box>
                  <Typography sx={{maxWidth:'300px',fontSize:'.7em',color:'#494949d0'}}>
                  Galaxi is your go-to for custom apparel and personalized gifts in Lebanon. Our high-quality products, from t-shirts to mugs and hats, are designed to fit your style. Shop with us for unique items that stand out.
                  </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
        <Box sx={{pt:{xs:4,sm:0}}}>
          <Typography className='#494949d0' component={'h1'} sx={{fontSize:'.9em',pb:1}}>
              Site Links
          </Typography>
          <Box className="flex wrap col gap1">

          <Link href='/' className='#494949d0 decor-' style={{fontSize:'.8em'}}>
              Home
          </Link>
          <Link href='/about' className='#494949d0 decor-' style={{fontSize:'.8em'}}>
              About
          </Link>
          <Link href='/collection/products' className='#494949d0 decor-' style={{fontSize:'.8em'}}>
              Collections
          </Link>
          </Box>

        </Box>
</Grid>



<Grid item xs={12} sm={3} md={3}>
<Box sx={{pt:{xs:4,sm:0}}}> 
          <Typography className='#494949d0' component={'h1'} sx={{fontSize:'.9em',pb:1}}>
              Contacts
          </Typography>
          <Box className="flex wrap col gap1">

          <a href={`${process.env.NEXT_PUBLIC_INSTA}`} target={'_blank'}  className='#494949d0 decor-none' style={{fontSize:'.8em'}}>
          @galaxi.leb/
          </a>
          <a href={`${process.env.NEXT_PUBLIC_WA}`} target={'_blank'}  className='#494949d0 decor-none' style={{fontSize:'.8em'}}>
          +{process.env.NEXT_PUBLIC_WA}
          </a>
          
          </Box>

        </Box>
</Grid>
          </Grid>
          <Box className='flex  center auto' sx={{background:'#01242b',py:1,color:'#494949d0'}}>
            <Typography component='p' sx={{fontSize:'.8em'}}>
            Site Developed By <span><a target='_blank' href='https://onbeirut.com'>OnBeirut Agency</a></span>
            </Typography>
          </Box>
      </Box>
);


export default Footer

