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
import ContactSection from './ContactSection/ContactSection'
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
    console.log('secondSectionImage: ', secondSectionImage[0]);
    
    const {setCategories} = useCategoriesContext()
    const router = useRouter();
    // const collection = data?.slice(0, Number(data?.length / 2))
    const collection1 = data?.slice(0, 4)
    const collection2 = data?.slice(4, 100)
    // const carouselProducts = data?.slice(Number(data?.length / 2), 50)


    // const categorizedProducts = getCategorizedProducts(excludedProducts, categories);


    // useEffect(() => {

    //     if (categories) {
    //         setCategories(categories)
    //     }
    //     gsap.utils.toArray('.animate-on-scroll').forEach((element: any)  => {
    //       gsap.fromTo(element,
    //         {
    //           opacity: 0,
    //           y:20,
    //         },
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           scrollTrigger: {
    //               trigger: element,
    //               start: 'top 70%',
    //               markers:false,
    //           },
    //       });
    //   });
    // }, [])

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
             delay={4000} Collectiontitle={'Latest Collections'}
              data={collection1}/>

              <FullscreenPoster secondSectionImage={secondSectionImage  && secondSectionImage?.length > 0 ? secondSectionImage[0]?.img : ''}/>

                  {/* {
                    data && data.map((i:any)=> {
                      if (!i?.categoryName || !i?.data) return;
                      return <HomeProductCollection key={i?.categoryName} title={`${i?.categoryName}`} products={i?.data}/> 
                       
                    })
                  } */}
                 
  

            <HomeProductsCarousel
            text=''
             delay={4000} Collectiontitle={'Best Sellers'}
              data={collection1}/>


        <ContactSection/>

        </Box>
    )
}

export default PreLoader