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

            <HomeProductsCarousel 
            delay={4500} 
            Collectiontitle='New Arrivals'
             text={'Our latest gear to drop. Don’t miss out on new CE products.'}
              data={data}/>
            {/* <HomeProductsCarousel delay={4000} Collectiontitle={'Best Sellers'}  data={collection}/> */}

                  {/* {
                    data && data.map((i:any)=> {
                      if (!i?.categoryName || !i?.data) return;
                      return <HomeProductCollection key={i?.categoryName} title={`${i?.categoryName}`} products={i?.data}/> 
                       
                    })
                  } */}
                      {/* <HomeProductCollection title={`A LA LIBANAISE`} products={collection1}/> */}
                    
                      {/* <HomeProductCollection title={`Clutch`} products={collection2}/> */}
                      
      

          <Grid className='space-evenly' container>
               {
               [
                {
                  title: 'Elegant Watch Box',
                  description: 'Our watch box features a versatile design that holds any watch securely. Crafted with fine materials for a sophisticated look, it ensures your timepiece is always ready to wear.',
                  CTA: 'Shop Now',
                  img: 'https://caseelegance.com/cdn/shop/files/IMG_0220.png?v=1707554788&width=700'
                },
                {
                  title: 'Luxury Watch Stand',
                  description: 'Display your watch with pride on our luxury watch stand. Designed to complement any decor, it offers a stylish way to keep your watch accessible and beautifully showcased.',
                  CTA: 'Explore Collection',
                  img: 'https://caseelegance.com/cdn/shop/files/Photo-41.png?v=1707554788&width=700'
                },
                {
                  title: 'Premium Leather Watch Case',
                  description: 'Protect and organize your watches with our premium leather watch case. Its sleek design and durable construction make it an essential accessory for any watch lover.',
                  CTA: 'Buy Now',
                  img: 'https://caseelegance.com/cdn/shop/files/CE-WIND-1-BLK-Listing-02.png?v=1712248374&width=700'
                },
                {
                  title: 'Modern Watch Holder',
                  description: 'Keep your watch in pristine condition with our modern watch holder. Featuring a minimalist design, it blends functionality with elegance, making it a perfect addition to your collection.',
                  CTA: 'Discover More',
                  img: 'https://caseelegance.com/cdn/shop/files/Cylindor-Brown-02.png?v=1706519803&width=700'
                }
              ].map(i=>{

                 return <Grid key={i.title} item xs={11.4} md={5.5} >
                      <ContentBlock href={'/collection/products'}
                       title={i.title}
                       img={`${i.img}`}
                       text={`${i?.description}`} 
                       CTA={i.CTA}                      />
                  </Grid> })}
          </Grid>

          <Box className='bg3'>
                <HomeProductCollection products={data} title=''/> 
          </Box>

            {/* <Box
                className="w100 "
                sx={{
                my: 4,
                background: '#7eb0b024'
            }}>

                <Grid
                    className='auto'
                    sx={{
                    maxWidth: '1200px',
                    background: '#f9d40100',
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
                                src="https://ucarecdn.com/e67a749e-abd8-4d9d-866d-dbc81029a2dc/mypic.jpg"
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
                                    xs: '2em',
                                    sm: '3em'
                                },
                                fontWeight: 700
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
                                mt: 2
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

            <Box className='relative' sx={{my:8,height:{xs:'500px',sm:'100%'}}}>
            <Box sx={{position:'relative', height: '100%', width:'100%'}}>
                      <Box className='overlay'>
                
                </Box>
                          <img
                              className={`img `}
                              src={`https://caseelegance.com/cdn/shop/files/Action-1_copy.png?v=1707554788&width=1500`}
                            //   src={`${item?.img}/-/resize/${imageSize}/`}
                              alt="Main Carousel Image"
                          />
                      </Box>
                      <Box className='absolute text-center w100  ' sx={{
                            transform: `translate(50%,-50%)`,
                        top:{xs:'50%',md:'50%'},right:'50%',zIndex:'1234'}}>
                             <Typography sx={{color:'white',fontSize:{xs:'.8em',md:'1em'},
                             fontWeight:500}}>
                                Urban Gentleman
                            </Typography>
                            <Typography sx={{pt:1,color:'white',fontSize:{xs:'1.5em',md:'2em'},fontWeight:700}}>
                            Stylish essentials for the modern man
                            </Typography>
                            <Btn  v2 className='center ' sx={{mt:'2em',mx:'auto'}}>
                                Shop Now
                            </Btn>
                      </Box>
            </Box>

            <Grid sx={{mt:8}} className='space-evenly' container>
               {
                [
                {
                    title: 'Classic Watch Organizer',
                    description: 'Organize your watch collection with our classic watch organizer. Its multiple compartments and elegant finish provide both style and functionality, perfect for any watch enthusiast.',
                    CTA: 'Shop Now',
                    img: 'https://caseelegance.com/cdn/shop/files/Cylindor-Brown-02.png?v=1706519803&width=700'
                  },
                  {
                    title: 'Sleek Watch Display Case',
                    description: 'Showcase your favorite watches in our sleek display case. Designed with a clear top and soft interior lining, it offers a premium display solution that protects and highlights your timepieces.',
                    CTA: 'View Collection',
                    img: 'https://caseelegance.com/cdn/shop/files/Luca-Brown-Listing-Layout_EBC-02.png?v=1707554789&width=700'
                  }
                ].map(i=>{

                 return <Grid key={i.title} item xs={11.4} md={5.5} >
                      <ContentBlock href={'/collection/products'}
                       title={i.title}
                       img={`${i.img}`}
                       text={`${i.description}`} 
                       CTA={i.CTA}                      />
                  </Grid> })}
          </Grid>

                <HomeProductCollection products={data} title=''/> 

        </Box>
    )
}

export default PreLoader