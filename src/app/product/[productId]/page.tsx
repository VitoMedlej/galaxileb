"use client"
import Btn from '@/Components/Btn/Btn';
import ProductImageCarousel from '@/Components/ProductImageCarousel/ProductImageCarousel'
import SelectColor from '@/Components/SelectColor/SelectColor';
import SelectWeight from '@/Components/SelectWeight/SelectWeight';
import useCart from '@/Hooks/useCart';
import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Product {
  images: string[];
  title: string;
  price: number;
  weight: number;
  description: string;
  category: string;
  newPrice?: number;
  sizes?: { size: string; price: string }[];
  colors ?: string[];
}

const Page = () => {
  const [product, setProduct] = useState<Product | null>(null);
  console.log('product: ', product);
  const [error, setError] = useState<string | null>(null);
  const { productId } = useParams();
  const { addToCart } = useCart();

  const [currentPrice, setPrice] = useState<number>(0);
  const [selectedColor, setColor] = useState<string | null>(null);
  console.log('currentPrice: ', currentPrice);

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
    }
  }, [product]);

  if (error) return <Box sx={{height:'70vh',alignItems:'center'}} className='flex auto center text-center '>Something went wrong! {' '}  <span>  <Link href='/'>Go Home</Link></span></Box>;
  if (!product) return <Box sx={{height:'70vh',alignItems:'center'}} className=' flex auto center text-center '>Loading Product Details</Box>;

  const {colors, images, description, title, sizes, category } = product;

  return (
    <Box sx={{ maxWidth: 'lg', pt: 2 }} className='lg auto'>
      <Box sx={{ px: 1 }} className='flex row space-evenly wrap'>
        <Box sx={{ width: { xs: '100%', md: '600px' } }}>
          <ProductImageCarousel images={images} />
        </Box>

        <Box sx={{ mt: 4, width: { xs: '100%', md: 'auto' } }}>
          <Typography sx={{ fontSize: { xs: '.8em', sm: '1em' } }} component='h1'>
            {category}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.3em', sm: '1.6em' } }} component='h1'>
            {title}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.2em', sm: '1.2em', pt: 1 } }} component='p'>
            ${currentPrice}
          </Typography>

          <Box>
            <SelectWeight setPrice={setPrice} sizes={sizes} />
            <SelectColor setColor={setColor} colors={colors} />
          </Box>
          <Box>
            <Btn sx={{width:'100%',my:1,border:'1px solid'}}>
              ADD TO CART
            </Btn>

           
            <Box sx={{px:1,pt:4,maxWidth:'600px'}}>
      <Typography component='h1'>
        Description:
      </Typography>
   <Typography 
    className='gray' 
    sx={{whiteSpace:'pre-wrap',maxWidth:'100%'}}
    dangerouslySetInnerHTML={{ __html: description }}
  />
   </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Page;