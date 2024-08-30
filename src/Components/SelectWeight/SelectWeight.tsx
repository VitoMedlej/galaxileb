"use client"
import { Box, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

const SelectWeight = ({sizes,selectedSize,setSelectedSize} : {setSelectedSize:any,selectedSize:any,sizes:any}) => {




  const handleChange = (event: SelectChangeEvent<string>)  : any => {
    const selected = sizes.find((size:string) => size === event.target.value);
    if (selected) {
      setSelectedSize(selected);
      
      
    }
  };
  if (!sizes) return;

  return (
    <Box sx={{width:{xs:'100%',sm:'auto'},my:2}} className='flex '>
     
      <FormControl sx={{width:'100%'}} size='small' fullWidth>
        <InputLabel>Size</InputLabel>
        <Select
          value={selectedSize}
          onChange={handleChange}
          label="Size"
        >
          {sizes.map((size: any, index : number) => (
            <MenuItem key={index} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectWeight;