"use client"
import AddImage from '@/Components/AddImage/AddImage'
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

const CustomOrder = ({setImgs,setDetails,customDetails}:any) => {

    
    const handleImgChange = (url:string[] | any) => {
        if (url) {
    
          setImgs(url);
        }
      }
  return (
    <Box sx={{mb:2}}>
            <Box>
                Select your image:
            </Box>
            <Box className='auto w100'>
            <AddImage   HandleImagesChange={handleImgChange}/>
            </Box>
            <Box>
            <TextField
          required

              fullWidth
            
              label={"Description"}
              margin="normal"
              name="customDetails"
             
              onChange={(e)=>setDetails(e.target.value)}
              type="string"
              value={customDetails}
              variant="outlined"
            />
            </Box>
            
    </Box>
  )
}

export default CustomOrder