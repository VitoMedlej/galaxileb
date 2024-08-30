"use client"
import Btn from '@/Components/Btn/Btn';
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
import SelectColor from '@/Components/SelectColor/SelectColor';
import SelectWeight from '@/Components/SelectWeight/SelectWeight';
import useCart from '@/Hooks/useCart';
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Product {
  images: string[];
  title: string;
  price: number;
  description: string;
  weight : string;
  category: string;
  size?: string;
  newPrice?: number;
  sizes?: string[];
  colors ?: string[];
}

const Page = () => {
  const [product, setProduct] = useState<Product | null>(null);


  const [error, setError] = useState<string | null>(null);
  const { productId } = useParams();
  const { addToCart } = useCart();

  const [currentPrice, setPrice] = useState<number>(0);
  const [selectedColor, setColor] = useState<string | null>(null);
  
  const [selectedSize, setSelectedSize] = useState<string>('');


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/get-by-id?id=${productId}`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        
        const data = await response.json();
        setProduct(data?.product);
      } catch (err: any) {
        setError(err?.message || 'An unexpected error occurred');
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    if (product) {
      setPrice(typeof product.newPrice === 'number' && 
        Number(product.newPrice) >= 0 ? Number(product.newPrice) :  Number(product.price));

       
        setSelectedSize(sizes ? `${sizes[0]}` : size || '');
        setColor(colors? colors[0] : null);
    }
  }, [product]);

  if (error) return <Box sx={{height:'70vh',alignItems:'center'}} className='flex auto center text-center '>Something went wrong! {' '}  <span>  <Link href='/'>Go Home</Link></span></Box>;
  if (!product) return <Box sx={{height:'70vh',alignItems:'center'}} className=' flex auto center text-center '>Loading Product Details</Box>;

  const {colors, size, weight, images, description, title, sizes, category } = product;

  const handleCart = () => {
    console.log('selectedSize: ', size);
    const itemToAdd = {
      title,
      category,
      img: images?.length > 0 ? images[0] : '',
      _id: `${productId}`,
      price: currentPrice,
      productselectedSize:selectedSize && selectedSize != 'undefined' ? selectedSize : size || '',
      productselectedColor: selectedColor,
      weight: weight ? Number(weight) : 0
    };
  
    addToCart(1, `${productId}`, itemToAdd);
  };

  return (
    <Box sx={{ maxWidth: 'xl', pt: {xs:15,md:22} ,px:1 }} className='auto '>
   
          <Grid container>
            <Grid xs={12} md={6} item>

          <ProductImageCarousel images={images} />
          </Grid>


          <Grid xs={12} md={6} item>
        <Box sx={{ maxWidth:'600px', pt:2,mt: 4 }}>
          <Typography sx={{ fontSize: { xs: '.8em', sm: '1em' } }} component='h1'>
            {category}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.3em', sm: '2em' },fontWeight:900 }} component='h1'>
            {title}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.2em', sm: '1.2em', pt: 1 } }} component='p'>
            ${currentPrice}
          </Typography>

          <Box>
          {sizes && sizes[0]?.length > 0 &&  <SelectWeight 
          
          selectedSize={selectedSize} setSelectedSize={setSelectedSize}
          
           sizes={sizes} />}
           { colors && colors?.length > 0 && <SelectColor setColor={setColor} colors={colors} />}
          </Box>
          <Box>
            
            <Btn 
className='bg'
            onClick={()=>handleCart()}
            sx={{
              color:'white',
              fontWeight:900,
              py:1.5,
              width:'100%',my:1,border:'1px solid',
              ':hover':{color:'black',border:'1px solid'}
              }}>
              ADD TO CART
            </Btn>
            <Btn 
className=''
onClick={() => window.open(`https://wa.me/+${process.env.NEXT_PUBLIC_wA}`, "_blank")}
            sx={{
              fontWeight:500,
              py:1.25,
              width:'100%',my:1,border:'1px solid',
              ':hover':{color:'black',border:'1px solid'}
              }}>
              Order on Whatsapp
            </Btn>

     {size &&       <Box className='flex gap1' sx={{mt:4,borderBottom:'1px solid #00000025',px:1,py:.5}}>
      <Typography component='h1'>
      Dimensions:
      </Typography>
   <Typography 
    className='gray' 
    sx={{maxWidth:'100%'}}
    component='h2'
  >
    {size}
  </Typography>
   </Box>}
   {weight &&       <Box className='flex gap1' sx={{mt:4,borderBottom:'1px solid #00000025',px:1,py:.5}}>
      <Typography component='h1'>
      Weight:
      </Typography>
   <Typography 
    className='gray' 
    sx={{maxWidth:'100%'}}
    component='h2'
  >
    {weight}kg
  </Typography>
   </Box>}

            <Box sx={{px:1,pt:4,maxWidth:'600px'}}>
      {/* <Typography component='h1'>
        Description:
      </Typography> */}
   <Typography 
    className='gray' 
    sx={{whiteSpace:'pre-wrap',maxWidth:'100%'}}
    dangerouslySetInnerHTML={{ __html: description }}
  />
   </Box>


            
          </Box>
        </Box>
       

        </Grid>
             </Grid>      
    </Box>
  )
}

export default Page;