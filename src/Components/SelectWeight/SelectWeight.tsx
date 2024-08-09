"use client"
import * as React from 'react';
// import { useState } from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { InputLabel } from '@mui/material';
import Btn from '../Btn/Btn';

export default function ProductCard({ setselectedSize, selectedSize, sizes }: any) {
  
  const handleSizeClick = (size: string) => {
    const option = sizes.find((option: any) => option.size?.toLocaleLowerCase() === size?.toLocaleLowerCase());
    setselectedSize(option);
  };

  return (
    <Box className='flex items-center' sx={{ mx:1,minWidth: { xs: 120, lg: 200 } }}>
        <Box className='flex row wrap'>
          {sizes &&
            sizes?.map((option: any) => (
              <Btn v2
                key={option.size}
                sx={{
                  mx:{xs:.5,sm:1},
                  px:{xs:.5,sm:1},py:0,
                  border:'1px solid black',
            ':hover': {
    background: selectedSize?.size?.toLocaleLowerCase() === option.size?.toLocaleLowerCase() ? 'black' : 'transparent',
    color: selectedSize?.size?.toLocaleLowerCase() === option.size?.toLocaleLowerCase() ? 'white' : 'black'
},
background: selectedSize?.size?.toLocaleLowerCase() === option.size?.toLocaleLowerCase() ? 'black' : 'transparent',
color: selectedSize?.size?.toLocaleLowerCase() === option.size?.toLocaleLowerCase() ? 'white' : 'black'
                }}
                onClick={() => handleSizeClick(option?.size)}
              >
                {option?.size}
              </Btn>
            ))}
        </Box>
      {/* Additional content, if needed */}
      {/* <p>Price: ${selectedSize.price}</p> */}
    </Box>
  );
}
