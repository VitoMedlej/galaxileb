"use client"
import React, {useEffect} from 'react'
import {Box, Container, Divider, Grid, Typography} from "@mui/material"
import MainCarousel from './MainCarousel/MainCarousel'
import {useRouter} from 'next/navigation'
import Btn from './Btn/Btn'
// import ContactSection from './ContactSection/ContactSection'
// import CategoryItem from './HomeCateogryList/CategoryItem'
import {useCategoriesContext} from '@/context/Contexts'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Perks from './ContactSection/ContactSection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
// import ContentBlock from './ContentBlock/ContentBlock'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'

// function getCategorizedProducts(data : any, categories : any) {
//   // console.log('data: ', data);
//   if (!data || !categories) return;
//    return categories.map((category:any) => {
//       if (!category || !data) return;
//       const productsInCategory =data && data?.filter((product : any) => `${product?.category?.toLowerCase()}` === `${category?.categoryName?.toLowerCase()}`);
//       return productsInCategory.length ? { categoryName: category.categoryName, data: productsInCategory } : null;
//     })
//     .filter((categoryProducts:any) => categoryProducts !== null);
// }






gsap.registerPlugin(ScrollTrigger);
const PreLoader = ({data, resImages, categories, secondSectionImage} : any) => {

    const {setCategories} = useCategoriesContext()
    const router = useRouter();
    // const collection = data?.slice(0, Number(data?.length / 2))
    const collection1 = data?.slice(0, 4)
    const collection2 = data?.slice(4, 100)
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
            text=''
             delay={4000} Collectiontitle={'OutDoor Collections'}
              data={collection1}/>

              {/* <FullscreenPoster/> */}

                  {/* {
                    data && data.map((i:any)=> {
                      if (!i?.categoryName || !i?.data) return;
                      return <HomeProductCollection key={i?.categoryName} title={`${i?.categoryName}`} products={i?.data}/> 
                       
                    })
                  } */}
                    
                      
      
                   
     


            <Box
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
                        xs={12}
                        md={6}>
                        <Box
                            sx={{
                            height: '100%',
                        }}
                            className='auto animate-on-scroll'>
                            <img
                                src="https://ucarecdn.com/ef9e8c99-4558-495c-8039-f41a83c85de2/242214612_543534960062485_9063518498744690892_n.jpg"
                                alt=""
                                className="img"/>
                        </Box>
                    </Grid>

                     <Grid item xs={12} md={6} >
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
                                className='color text-center auto w100 black animate-on-scroll '>
                               Office Space
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
                                className='flex text-center left animate-on-scroll'>
                                {`A space dedicated to work and professional activities, the office enhances productivity as a separate space away from home distractions. Make yours conducive to work-related tasks, with beautiful and thoughtful designs made to perform proficiently.`
}
                            </Typography>
                            <Btn
                                onClick={() => router.push('/about')}
                                className='flex center animate-on-scroll  '
                                sx={{
                                width: '150px',
                                color: 'black',
                                mt: 2,
                                mx:'auto',
                                px: 0
                            }}>
                                {'Learn More'}

                            </Btn>
                        </Container>

                    </Grid>

                </Grid>




            </Box> 





            <Box
                className="w100 "
                sx={{
                my: 4,
            }}>

                <Grid
                    className='auto'
                    sx={{
                        maxWidth:'lg',
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
                        item
                        xs={5.9}
                        md={2.9}
                        >
                        <Box
                            sx={{
                                height: {xs:'300px',sm:'400px'},

                        }}
                            className='auto animate-on-scroll'>
                            <img
                                src="https://ucarecdn.com/e11e417e-c2f6-4db0-ba26-2ddf617d705f/441467704_18026046482497211_4006659562523391908_n.jpg"
                                alt=""
                                className="img"/>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{
                        mt: {
                            xs: 4,
                            sm: 1
                        },
                    }}
                        item
                        xs={5.9}
                        md={2.9}>
                        <Box
                            sx={{
                                height: {xs:'300px',sm:'400px'},

                        }}
                            className='auto animate-on-scroll'>
                            <img
                                src="https://ucarecdn.com/bf9ce434-b2bb-4f60-bd4b-8451e5c6c87f/442420529_18026584604497211_668027106191694083_n.jpg"
                                alt=""
                                className="img"/>
                        </Box>
                    </Grid>

                     <Grid item xs={12} md={6} >
                        <Container
                            className='wrap col  auto flex'
                            sx={{
                            py: 4,
                            maxWidth:'600px',
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
                                className='color text-center auto w100 black animate-on-scroll '>
                               Office Space
                            </Typography>
                            <Typography
                                sx={{
                                flex: 1,
                                alignItems: 'left',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '.9em'
                                },
                                fontWeight: 300,
                                color: '#4d555e',
                                mt: 1
                            }}
                                className='flex text-center left animate-on-scroll'>
                                {`A space dedicated to work and professional activities, the office enhances productivity as a separate space away from home distractions. Make yours conducive to work-related tasks, with beautiful and thoughtful designs made to perform proficiently.`
}
                            </Typography>
                            <Btn
                                onClick={() => router.push('/about')}
                                className='flex center animate-on-scroll  '
                                sx={{
                                width: '150px',
                                color: 'black',
                                mt: 2,
                                mx:'auto',
                                px: 0
                            }}>
                                {'Learn More'}

                            </Btn>
                        </Container>

                    </Grid>

                </Grid>



                            
            </Box> 











            <HomeProductsCarousel
            text=''
             delay={4000} Collectiontitle={'OutDoor Collections'}
              data={collection1}/>








            <Box className='relative' sx={{mt:8,height:{xs:'500px',sm:'500px'}}}>
            <Box sx={{position:'relative', height: '100%', width:'100%'}}>
                      <Box className='overlay'>
                
                </Box>
                          <img
                              className={`img cover`}
                              src={`${secondSectionImage && secondSectionImage?.length > 0
                                && secondSectionImage[0]?.img && `${secondSectionImage[0]?.img}`}`}
                            //   src={`${item?.img}/-/resize/${imageSize}/`}
                              alt="Main Carousel Image"
                          />
                      </Box>
                      <Box className='absolute  animate-on-scroll  w100 center auto flex col' sx={{
                           
                            top: {xs:'40%',sm:`40%`},
                            alignItems:{xs:'center',sm:'center'},
                            width: 'fit-content',
                       zIndex:'1234'}}>
                            
                            <Typography sx={{
                                textAlign:{xs:'center',sm:'flex-end'},
                                pt:1,color:'white',fontSize:{xs:'1.5em',md:'2em'},fontWeight:300}}>
                            Embrace the power of movement with EArchitecture.
                            </Typography>
                            <Typography sx={{
                                maxWidth:'600px',
                                textAlign:{xs:'center',sm:'flex-end'},
                                pt:1,color:'white',fontSize:{xs:'.8em',md:'.9em'},fontWeight:300}}>
                            Embrace the power of movement with EArchitecture.
                            Defined by collaborative spirit,
the Co Chair Collection is a cohesive series of multifunctional chairs that adapts to the spatial needs and design preferences of both private
</Typography>
                          
                            <Btn  
                            onClick={()=>router.push('/collection/products')}
                            v2 className='center ' sx={{mt:'1em',mx:''}}>
                                Shop Now
                            </Btn>
                      </Box>
            </Box>

        </Box>
    )
}

export default PreLoader