"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer bg " style={{color:'white'}}>
    <div className="container bg" style={{color:'white'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img contain'
            
            src='https://ucarecdn.com/c9d6219c-d35c-4f91-a252-73ce3e75b5af/ealogo.PNG' alt="Pets Town Lebanon Logo" />
            </Link>
          </div>
          <Typography component='p' sx={{ fontSize: '.85em',color:"white" }}  className='footer-p '>
      {
        `E.Architecture: Where modern design meets timeless quality. Transform your space with furniture and accessories that stand the test of time.`
      }
          </Typography>
          <SMicons/>


        </div>

        <div className="site-footer__links ">
  
          <ul className=' ul-white'>
            <li className='white link-title'>
              <h1 style={{color:'white'}}>

              Site links
              </h1>
              </li>
            <li ><Link   href="/">
              Home</Link></li>
              
          <li><Link href="/about">About Us</Link></li> 
            <li><Link href="/collections/products">All Products</Link></li> 
            {/* <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li> */}
            {/* <li><Link href="/privacy-policy">Privacy Policy</Link></li> */}
            <li><Link href="https://wa.me/+96181303139">WhatsApp Us</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'white'}}>
            <li className='link-title'>
            <h1 style={{color:'white'}}>

              Contact
            </h1>
            
              </li>
        

            <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`} target="_blank" rel="noreferrer" >@EArchitecture.lb_</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+{process.env.NEXT_PUBLIC_WA}</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </div>
    </div>
        <Divider color='gray'></Divider>
    <div className="site-footer__bottom  " style={{color:'white',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'white'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'white' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer

