"use client"
// import {IProduct} from '@/Types/Types'
import {Box, Typography} from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
// import {GrAdd} from 'react-icons/gr'
import {useRouter} from 'next/navigation'
import useCart from '@/Hooks/useCart'

import {BiCartAdd} from 'react-icons/bi';

const ProductCard = ({
    title,
    price,
    sizes,
    images,
    category,
    _id,
    width,
    height,
    inStock,
    newPrice,
    sx
} : {
    inStock?: boolean,
    _id: string,
    title: string,
    sizes: {
        size: number;
        price: number;
    }[] | null;
    price: number,
    newPrice?: number,
    images: string[],
    category: string,
    width?: string | number | any,
    height?: string | number,
    sx?: any,
}) => {
    const router = useRouter()
    
    

    
    return (
        <Box
            className='trans cardproduct center text-center'
            sx={{
                py: 3,
                margin: '0em auto',
                background: 'transparent',
                my: 1,
                minWidth: { sm: '30%', md: '24%' },
                width: width
                    ? width
                    : {
                        xs: '48%',
                        sm: '32%',
                        md: '22%'
                    },
                ...sx,
            }}
        >
            <Box 
                className='cursor auto'
                onClick={() => router.push(`/product/${_id}`)}
                sx={{
                    background: 'transparent',
                    width: { xs: '98%', sm: '100%', md: 'auto' },
                    height: height || { xs: '280px', sm: '320px', md: '400px' }
                }}
            >
                <img
                    src={images
                        ? `${images[0]}/-/resize/500/`
                        : ''}
                    alt="Product image"
                    className="img cover "
                />
            </Box>
            
            <Box 
                sx={{
                    px: .95,
                    mt: { xs: 1, sm: 1.5, md: 0 },
                    alignItems: "left",
                    background: 'transparent'
                }}
            >
                <Typography
                    className='flex cursor limited w100 left'
                    component='h1'
                    onClick={() => router.push(`/product/${_id}`)}
                    sx={{
                        textAlign: 'left',
                        color: 'black',
                        pt: .25,
                        fontSize: { xs: '.75em', sm: '.9em', md: '1em' },
                        fontWeight: '300'
                    }}
                >
                    {title}
                </Typography>
                
                {inStock !== false ?
                    <>
                        <Typography
                            component='p'
                            className=" cursor"
                            sx={{
                                ':hover': {
                                    textDecoration: 'underline',
                                },
                                display: 'flex',
                                alignItems: "left",
                                my: 0.5,
                                fontWeight: '400',
                                fontSize: { xs: '.8em', sm: '.9em' },
                            }}
                        >
                            {newPrice ? (
                                <>
                                    <s style={{ color: 'red' }} >${Number(price)?.toFixed(2)}</s>&nbsp;&nbsp;<span>{`$${Number(newPrice)?.toFixed(2)}`}</span>
                                </>
                            ) : (
                                `$${Number(price)?.toFixed(2)}`
                            )}
                        </Typography>
                        
                        {/* Size options */}
                        {['XS','SM','MD'].length > 0 && (
                            <Typography
                            className='color4'
                                component='p'
                                sx={{
                                    mt: .5,
                                    fontSize: '.8em',
                                    color: 'black',
                                    textAlign: 'left',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.5em'
                                }}
                            >
                                {['XS','SM','MD'].map((size : string, index) => (
                                    <span key={index}>{size}</span>
                                ))}
                            </Typography>
                        )}
                    </>
                    :
                    <Typography
                        sx={{
                            mb: .5,
                            color: 'red',
                            fontWeight: '600',
                            fontSize: { xs: '.99em', sm: '1.06em' }
                        }}
                    >
                        Out Of Stock
                    </Typography>
                }
            </Box>
        </Box>
    )
}

export default ProductCard