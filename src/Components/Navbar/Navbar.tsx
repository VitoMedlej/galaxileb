"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {  useState} from 'react';
import SearchModal from './SearchModal';
import Link from 'next/link';
import { Typography} from '@mui/material';
import {useRouter} from 'next/navigation';

import { useCartContext, useCategoriesContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import NavButtom from './NavButtom';
// import SearchInput from './SearchInput';



export default function Navbar() {
    const { open, setOpen } = useDrawerContext(); // Assuming you have these context hooks
    const { cartOpen, setCartOpen } = useCartContext();
  const {categories} = useCategoriesContext()

    const router = useRouter();

    const [openModal, setOpenModal] = useState(false);

    // useEffect(() => {
    // }, [cartOpen]);

    return (
        <>
            <Box
                id='navy'
                className='center auto   flex'
                sx={{
                    zIndex: 12,
                    borderBottom:'1px solid #0000000d',
                    flexWrap: 'wrap',
                    width: '100%',
                    position: 'fixed',
                    top: 0,
                    boxShadow: 'none',
                    background: 'transparent',
                    border: 'none',
                    px: 0,
                    py:0,
                    flexGrow: 1
                }}
            >
                <AppBar
                    id='navy2'
                    className='center col  relative flex'
                    sx={{
                        boxShadow: 'none',
                        background: 'transparent',
                        width: '100%',
                    py:0,

                        margin: '0 auto'
                    }}
                >
                    <Box className='center bg  w100 text-center' sx={{ minWidth: '90vw', 
                       width: '100%', py: 0 }}>
                        <Typography  component='h1'
                         sx={{ 
                            fontWeight:600,
                            
                            color:"white",
                         py: 0.4, fontSize: { xs: '.75em', sm: '.75em' } }}>
                          Delivery all over Lebanon
                        </Typography>
                    </Box>

                    <Toolbar className='flex  relative center items-center'
                    
                    sx={{
                        //  boxShadow:'1px 1px 3px #857a5b4a',
                     py: 0.1, background: 'white' }}>
                        {/* Logo on the far left */}



                            <Box
                            onClick={() => router.push('/')}
                            className='cursor pointer'
                            sx={{
                                // position: { xs: 'absolute', sm: 'absolute' },
                                // left: { xs: '50%' },
                                // transform: { xs: 'translateX(-50%)' },
                                width: { xs: '100px', sm: '140px' },
                                height: { xs: '80px', sm: '90px' },
                            }}
                        >
                            <img 
                            src="https://ucarecdn.com/6d12c010-269b-413a-9153-78feeedd37c7/galaxilogowhite.jpg" alt="EArchitectureLOGO" className="img contain" />
                        </Box>


                        <Box className="flex flex1 flex-end">
                            <Box
                                onClick={() => setOpenModal(!openModal)}
                                className='cursor pointer flex center items-center'
                                sx={{ display:{xs:'flex',md:'none'}, width: '20px', padding: 1 }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/9177/9177086.png" alt="" className="img contain" />
                            </Box>

                            <Box
                                onClick={() => setCartOpen(!cartOpen)}
                                className='cursor pointer flex center items-center'
                                sx={{ width: '20px', padding: 1 }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png" alt="" className="img contain" />
                            </Box>
                            <Box
                                onClick={() => setOpen(!open)}
                                className='cursor pointer center items-center'
                                sx={{ width: '25px', padding: 1, 
                                    display: { xs: 'flex', md: 'none' } }}
                            >
                                <img style={{ filter: 'invert(0)' }} src="https://cdn-icons-png.flaticon.com/128/4219/4219090.png" alt="" className="img contain" />
                            </Box>
                        
                        </Box>
                    </Toolbar>

                    {/* Render your SearchModal component */}
                    {/* <SearchModal openModal={openModal} setOpenModal={setOpenModal} /> */}

                </AppBar>

                {/* <NavButtom/> */}
                <NavButtom categories={categories}/>

            </Box>

        </>
    );
}