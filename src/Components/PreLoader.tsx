"use client"
import React, {useEffect} from 'react'
import {Box, Container, Divider, Grid, Typography} from "@mui/material"
import MainCarousel from './MainCarousel/MainCarousel'
import {useRouter} from 'next/navigation'
import Btn from './Btn/Btn'
// import ContactSection from './ContactSection/ContactSection'
import CategoryItem from './HomeCateogryList/CategoryItem'
import {useCategoriesContext} from '@/context/Contexts'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import ContentBlock from './ContentBlock/ContentBlock'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'

function getCategorizedProducts(data : any, categories : any) {
  // console.log('data: ', data);
  if (!data || !categories) return;
   return categories.map((category:any) => {
      if (!category || !data) return;
      const productsInCategory =data && data?.filter((product : any) => `${product?.category?.toLowerCase()}` === `${category?.categoryName?.toLowerCase()}`);
      return productsInCategory.length ? { categoryName: category.categoryName, data: productsInCategory } : null;
    })
    .filter((categoryProducts:any) => categoryProducts !== null);
}






gsap.registerPlugin(ScrollTrigger);
const PreLoader = ({data, resImages, categories} : any) => {

    const {setCategories} = useCategoriesContext()
    const router = useRouter();
    // const collection = data?.slice(0, Number(data?.length / 2))
    // const collection1 = data?.slice(5, 7)
    // const collection2 = data?.slice(7, 10)
    // const carouselProducts = data?.slice(Number(data?.length / 2), 50)


    // const categorizedProducts = getCategorizedProducts(excludedProducts, categories);


    useEffect(() => {

        if (categories) {
            setCategories(categories)
        }
        gsap.utils.toArray('.animate-on-scroll').forEach((element: any)  => {
          gsap.fromTo(element,
            {
              opacity: 0,
              y:20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                  trigger: element,
                  start: 'top 70%',
                  markers:false,
              },
          });
      });
    }, [])

    return (

        <Box >

            <MainCarousel resImages={resImages}/> 

            {/* <Box
                className="flex justify-between col center text-center auto"
                sx={{
                px: 1,
                pt: 4,
                pb: 4,
                maxWidth: 'lg'
            }}>

                <Typography
                    component={'h1'}
                    className=' clr2 center text-center box animate-on-scroll'
                    sx={{
                    fontSize: {
                        xs: '1.5em',
                        sm: '2em'
                    },
                    padding: .5,
                    fontWeight: '700'
                }}>
                  New Arrivals
                </Typography>

                <Typography
                    component={'p'}
                    className='sectionTitle   center text-center box animate-on-scroll'
                    sx={{
                    fontWeight: '200'
                }}>
                    {
                      `Urban Gentleman is a Lebanese handbag line that creates unique and luxury hand crafted bags and accessories. Proudly crafted and produced in Lebanon, our pieces are manufactured with high quality materials, making each item a unique presentation.`
                    }
                </Typography>

            </Box> */}

            <HomeProductCollection 
            title='New Arrivals'
              products={data}/>
            {/* <HomeProductsCarousel delay={4000} Collectiontitle={'Best Sellers'}  data={collection}/> */}

                  {/* {
                    data && data.map((i:any)=> {
                      if (!i?.categoryName || !i?.data) return;
                      return <HomeProductCollection key={i?.categoryName} title={`${i?.categoryName}`} products={i?.data}/> 
                       
                    })
                  } */}
                      {/* <HomeProductCollection title={`A LA LIBANAISE`} products={collection1}/> */}
                    
                      {/* <HomeProductCollection title={`Clutch`} products={collection2}/> */}
                      
      

     


            {/* <Box
                className="w100 "
                sx={{
                my: 4,
            }}>

                <Grid
                    className='auto'
                    sx={{
                    maxWidth: '1200px',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    py: 8
                }}
                    container>
                    <Grid
                        sx={{
                        mt: {
                            xs: 4,
                            sm: 1
                        }
                    }}
                        maxWidth='lg'
                        item
                        xs={9}
                        md={4}>
                        <Box
                            sx={{
                            height: '100%',
                            maxWidth: '550px'
                        }}
                            className='auto animate-on-scroll'>
                            <img
                                src="https://instagram.fbey22-1.fna.fbcdn.net/v/t39.30808-6/450251622_122102107868402824_6956869894819437387_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fbey22-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ZTbipEkNV-0Q7kNvgE8c9lF&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQwOTg1NTE1NzA2MjA1Nzc1NA%3D%3D.2-ccb7-5&oh=00_AYABJ39IgaPAj8soKMuWOALQNJkf8aJiOdvjSR7X6f51tQ&oe=66A28F9C&_nc_sid=8f1549"
                                alt=""
                                className="img"/>
                        </Box>
                    </Grid>

                     <Grid item xs={12} md={6} sx={{}}>
                        <Container
                            className='wrap col  auto flex'
                            sx={{
                            py: 4,
                            alignItems: 'left',
                            display: 'flex'
                        }}>

                            <Typography
                                sx={{
                                width: '100%',
                                pt: {
                                    xs: 0,
                                    sm: 0
                                },
                                fontSize: {
                                    xs: '1.4em',
                                    sm: '2em'
                                },
                                fontWeight: 300
                            }}
                                component='h1'
                                className='color animate-on-scroll '>
                                About Us
                            </Typography>
                            <Typography
                                sx={{
                                width: '100%',
                                flex: 1,
                                maxWidth: '500px',
                                alignItems: 'left',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '.9em'
                                },
                                fontWeight: 300,
                                color: '#4d555e',
                                mt: 1
                            }}
                                className='flex left animate-on-scroll'>
                                {`Shop our collection in Beirut and discover the perfect accessory to elevate your wardrobe. Experience the luxury and authenticity of Lebanese-made bags with Urban Gentleman.`
}
                            </Typography>
                            <Btn
                                onClick={() => router.push('/about')}
                                className='animate-on-scroll  '
                                sx={{
                                width: '150px',
                                color: 'black',
                                mt: 2,
                                px: 0
                            }}>
                                {'Learn More'}

                            </Btn>
                        </Container>

                    </Grid>

                </Grid>

            </Box> */}

            <Box className='relative' sx={{my:8,height:{xs:'500px',sm:'500px'}}}>
            <Box sx={{position:'relative', height: '100%', width:'100%'}}>
                      <Box className='overlay'>
                
                </Box>
                          <img
                              className={`img cover`}
                              src={`https://winnerforce-lb.com/cdn/shop/files/750-1100___003_x800.png?v=1716815234`}
                            //   src={`${item?.img}/-/resize/${imageSize}/`}
                              alt="Main Carousel Image"
                          />
                      </Box>
                      <Box className='absolute  animate-on-scroll  flex col' sx={{
                            transform: `translateY(-50%)`,
                            right: 0,
                            top: {xs:'70%',sm:`50%`},
                            alignItems:{xs:'center',sm:'flex-end'},
                            width: 'fit-content',
                            padding: '0 2em',
                       zIndex:'1234'}}>
                            
                            <Typography sx={{
                                textAlign:{xs:'center',sm:'flex-end'},
                                pt:1,color:'white',fontSize:{xs:'1.5em',md:'2em'},fontWeight:300}}>
                            Embrace the power of movement with Shield.
                            </Typography>
                            <Btn  
                            onClick={()=>router.push('/collection/products')}
                            v2 className='center ' sx={{mt:'1em',mx:''}}>
                                Shop Now
                            </Btn>
                      </Box>
            </Box>

            <HomeProductCollection 
            title='Best Sellers'
              products={data}/>

            <Box className='relative'>
            <picture>
        <source media="(min-width: 768px)" srcSet="https://winnerforce-lb.com/cdn/shop/files/cover_kit_00013_1400x.png?v=1713275040" />
        <source media="(max-width: 767px)" srcSet="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_486,c_fit/dpr_2/image/packs/cult/CULTPACK509/19_mag_web.jpg" />
        <img src="https://winnerforce-lb.com/cdn/shop/files/cover_kit_00013_1400x.png?v=1713275040" alt="" className="img" />
    </picture>
                <Box
                sx={{
                    top: {xs:`60%`,md:'70%'},
                    zIndex: 5214,
                    right: `50%`,
                    transform: `translate(50%, 50%)`,
                }}
                className="absolute">
                    <Btn>
                        Shop Now
                    </Btn>
                </Box>
            </Box>
        </Box>
    )
}

export default PreLoader