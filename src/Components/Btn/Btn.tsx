"use client"
import { Button } from '@mui/material'
import React from 'react'



let style1 = {
  color: 'black',
  background: ' transparent',
  border:'1px solid black',
  borderRadius: '2px', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: 'white',
      color:' #857a5a',
      border: '1px solid  #857a5a',
    
  },
  display: 'flex',
  padding: '8px 55px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}
let style2 = {
  color: 'black',
  background: ' #9fa092',
  border:'1px solid #9fa092',
  borderRadius: '2px', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: 'white',
      color:' #857a5a',
      border: '1px solid  #857a5a',
    
  },
  display: 'flex',
  padding: '8px 55px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}

const Btn = ({v2,disabled,onClick,className,children,sx}:{className?:string,disabled?:boolean,onClick?:()=>any,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
   
    className={`trans ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn