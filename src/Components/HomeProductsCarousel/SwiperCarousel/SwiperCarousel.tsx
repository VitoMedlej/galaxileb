"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Autoplay, Pagination, Navigation} from "swiper";
import 'swiper/css';
import {Box} from '@mui/material';
import ProductCard from '@/Components/ProductCard/ProductCard';
import {IProduct} from '@/Types/Types';

const SwiperCarousel = ({data, delay} : {
    data: IProduct[],
    delay?: number
}) => {

    return (
        <Box
            sx={{
            py: {
                xs: '.5em',
                sm: '2em'
            },
            width: '100%',
            maxWidth: 'lg',
            margin: '0em auto',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
  <Swiper
            pagination={{
                clickable: true,
              }}
             
              autoplay={{
                delay:  delay || 5000,
                disableOnInteraction: true,
              }}
              navigation={true}
            spaceBetween={10}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[FreeMode,Navigation, Pagination]}
            breakpoints={{
                200 : {
                    slidesPerView:1,
                },
                540: {
                    slidesPerView: 1,
                  },
                  
                  1024: {
                    slidesPerView: 3,
                  },
                  1640: {
                    slidesPerView: 3,
                  },
                
               
        }}
        
        >

                {data && data.length > 0 && [...data].reverse().map((item : any) => {
                    if (!item._id) 
                        return
                    return <SwiperSlide
                    className='animate-on-scroll'
                        style={{
                        marginRight: '0 !important'
                    }}
                        key={item._id}>
                        <ProductCard
                        sx={{pt:0,mt:0}}
                        sizes={item?.sizes}
                newPrice={item?.newPrice}

                        inStock={item?.inStock}
                            height={'400px'}
                            width='100%'
                            title={item.title}
                            images={item.images}
                            price={item.price}
                            _id={item._id}
                            category={item.category}/>
                    </SwiperSlide>


                })
}

            </Swiper>
        </Box>

    );
};

export default SwiperCarousel