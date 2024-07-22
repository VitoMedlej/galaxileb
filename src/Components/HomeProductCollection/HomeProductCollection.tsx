"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { IProduct } from '@/Types/Types'
// import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import Btn from '../Btn/Btn'

const HomeProductCollection = ({products,title} : {title?:string,products:IProduct[] | never[]}) => {
 const router = useRouter()
  return (
    <Box sx={{mt:4,maxWidth:'lg'}} className='center auto'>
        
         <Box className="flex justify-between row auto items-center " sx={{px:1,pt:{xs:8,sm:6},pb:0,maxWidth:'lg'}}>

        {title &&  <Typography
         onClick={()=>router.push(`/${encodeURIComponent(`${title ? title : 'collection'}`)?.toLocaleLowerCase()}/products`)}
         sx={{
  
    maxWidth:'1200px',
    pb:0,
   color:'black',
    fontWeight:'300',
    fontSize:{xs:'1em',sm:'1.5em'},
    }} component='h1' className=' cusror pointer animate-on-scroll   '>
       {title.toUpperCase()}
    </Typography>}

    <Btn v2 sx={{width:'auto',px:{xs:1,sm:2}}}>
      View All
    </Btn>


</Box>

              <Box sx={{mb:2,mt:0}} className='flex animate-on-scroll wrap gap1 justify-center'>
                  {products && products?.length > 0 && products.map(i=>{

                      return <ProductCard 

                newPrice={i?.newPrice}
                    sizes={null}
                      key={i?._id} inStock={i?.inStock} title={i?.title} price={i?.price} _id={i?._id} 
                       images={i?.images?.length > 0 && i?.images[0]?.length > 3 ? i?.images : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90cK_Js0H-conZ_T6tHjPHtCXP8e-e7MHt69YkHWej5n90FlRvLFUMC2CmRt6UPy9dYc&usqp=CAU']}
                       category={i?.category}/>
                  })}
              </Box>




             
            </Box>
  )
}

export default HomeProductCollection