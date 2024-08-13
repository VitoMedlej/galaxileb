"use client"
import { Box, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

const SelectWeight = ({sizes,setPrice} : {sizes:any,setPrice:any}) => {
  if (!sizes) return;


  const [selectedSize, setSelectedSize] = useState<string>(sizes[0].size);
  const [selectedPrice, setSelectedPrice] = useState<string>(sizes[0].price);

  const handleChange = (event: SelectChangeEvent<string>)  : any => {
    const selected = sizes.find((size:{size:string}) => size.size === event.target.value);
    if (selected) {
      setSelectedSize(selected.size);
      setSelectedPrice(selected.price);
      setPrice(selected.price);
    }
  };
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
            <MenuItem key={index} value={size.size}>
              {size.size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectWeight;