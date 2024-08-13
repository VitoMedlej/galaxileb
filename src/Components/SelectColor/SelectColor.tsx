"use client"
import { Box, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

const SelectColor = ({ colors, setColor }: { colors?: string[], setColor: (color: string) => void }) => {
  if (!colors) return null;

  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value;
    setSelectedColor(selected);
    setColor(selected);
  };

  return (
    <Box sx={{ width: { xs: '100%', sm: 'auto' }, my: 2 }} className='flex'>
      <FormControl sx={{ width: '100%' }} size='small' fullWidth>
        <InputLabel>Color</InputLabel>
        <Select
          value={selectedColor}
          onChange={handleChange}
          label="Color"
        >
          {colors.map((color: string, index: number) => (
            <MenuItem key={index} value={color}>
            {/* <Box sx={{mr:.5,borderRadius:'50%',background:`${color}`,width:'10px',height:'10px'}}>

            </Box> */}
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default SelectColor;
