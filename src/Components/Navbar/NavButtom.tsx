"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MenuHover from './MenuHover'
// import MenuHover from './MenuHover'


// {categories && categories?.slice(0,2)?.map((category : any,  index : any)  => (
//     <Link className=' decor-none nav-link' key={category?.categoryName} href={`/${encodeURIComponent(category?.categoryName?.toLowerCase())}/products`} >
//     <Box component="p" sx={{fontWeight:300, color: 'black', ml: 2, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
//     {category?.categoryName}
//     </Box>
//     </Link>
//     ))}


const NavButtom = ({categories}:any) => {
    

  return (
    <Box
        className=' items-center wrap    '
        sx={{
            flex:1,
            position:'relative',
        width: '100%',
        py:.5,
        background:'white',
        // maxWidth:'lg',/
        borderTop:'1px solid #0000000d',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex    '
            sx={{
                maxWidth:'lg',
            justifyContent: 'flex-start',
            // overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collections/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link className='black trans  decor-none ' href={`/`}>

<Typography 
className=' cursor center  flex gap1 black decor-none captialize'

component='h2' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',
':hover':{
    textDecoration: 'underline',
},
fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
Home
</Typography>
</Link>
<Link className='black decor-none ' href={`/about`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='h2' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',
':hover':{
    textDecoration: 'underline',
},
fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
About
</Typography>
</Link>
<Link className='black decor-none ' href={`/collection/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='h2' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',
':hover':{
    textDecoration: 'underline',
},
fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
Collections
</Typography>
</Link>
{/* <Link className='black decor-none ' href={`/#shop`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='h2' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',

fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
Shop
</Typography>
</Link> */}
{/* {
    categories && categories?.slice(0,1).map((cate:any)=>{
            if (cate?.subcategories?.length == 0){ return      <Link   
                 key={cate?.categoryName} className='black decor-none'
             href={`/${cate?.categoryName?.toLocaleLowerCase()}/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='h2' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',

fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
{`${cate?.categoryName}`}
</Typography>
</Link>}
        
            else {

                return <MenuHover key={cate?.categoryName}
                img={'https://irrelevantlvng.com/img/cms/IMG_1323.JPG'}
                category={`${cate?.categoryName}`} subcategories={cate?.subcategories && cate?.subcategories?.length > 0 ? cate?.subcategories : []} />
            }
          
    })
} */}
{/* <MenuHover img={'https://irrelevantlvng.com/img/cms/IMG_1323.JPG'} category={'Shop'} subcategories={['test','tes1']} /> */}

{/* <MenuHover img={'https://irrelevantlvng.com/img/cms/IMG_1323.JPG'} category={'collections'} subcategories={['22','33']} /> */}


{/* <Link className='black decor-none ' href={`/about`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='h2' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',

fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
About US
</Typography>
</Link> */}

{/* {
    // [  `Oversized Outfits`,
    //     `Casual Comfort`,
    //     `Sporty Streets`,
    //     `Trendy Threads`]
            [
                
                // 'collections',
            // `Casual Comfort`,
            // `Sporty Streets`,
        ]
            .map(i=>{
        return <Link key={i} className='black decor-none ' href={`/${i.toLocaleLowerCase()}/products`}>

        <Typography 
        component='h2'
        className=' cursor center flex gap1 black decor-none captialize'
        
        sx={{width:'max-content',
        mx:'.75em',
        alignItems: 'center',
        fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
        {i.toUpperCase()}
        </Typography>
        </Link>
    })
} */}

{/* <Link className='black decor-none ' href={`/organic herbs/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='p' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',

fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
Organic Herbs
</Typography>
</Link>
<Link className='black decor-none ' href={`/natural supplements/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'

component='p' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',

fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
Natural Supplements
</Typography>
</Link> */}



{/* <Link className='black decor-none ' href={`/about`}>

<Typography 
className=' cursor center flex gap1 black decor-none '

component='p' sx={{width:'max-content',
mx:'.75em',
alignItems: 'center',

fontWeight:300,fontSize:{xs:'.8em',sm:'.9em'}}}>
About Us
</Typography>
</Link> */}

{/* <Link className='black decor-none uppercase' href={`/new-arrivals/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none uppercase'

component='p' sx={{width:'max-content',
alignItems: 'center',
mx:'.75em',

fontWeight:300,fontSize:{xs:'.6em',sm:'.75em'}}}>
New Arrivals
</Typography>
</Link> */}
                {/* <Link className='black decor-none uppercase' href={`/birds/products`}>

                <Typography 
      className=' cursor center flex gap1 black decor-none uppercase'
        
        component='p' sx={{width:'max-content',
        mx:'.75em',
        alignItems: 'center',
        
        fontWeight:300,fontSize:{xs:'.6em',sm:'.75em'}}}>
     Birds
   </Typography>
   </Link> */}
           

            {/* { [
    {cate:"Categories",subCate:catsSubcategories,img:`https://th.bing.com/th/id/R.1776ae53615a64b359d8d65cf5eca544?rik=WKeDBh2pbwPftA&riu=http%3a%2f%2fwww.kmart.com.au%2fwcsstore%2fKmart%2fimages%2fespots%2fpets-beds-050418-tall-banner.jpg&ehk=fwMSwpMwGOLad6eRmrG%2bT48oAdH2G7Y8Mm2thOjl3Zk%3d&risl=&pid=ImgRaw&r=0`},
    // {cate:"Dogs",subCate:dogsSubcategories,img:`https://mypetguru.com/imgs/uploads/toy-for-dog.jpg`},
    // {cate:"Offers",subCate:offersSubcategories,img:'https://i.pinimg.com/originals/bf/cb/59/bfcb59f20bddc43101e39de2cc142f7e.jpg'}
].map(i => {
                // return <Link className='clr decor-none uppercase' key={i} href={`/${i.replace(/ /g, '-').toLocaleLowerCase()}/products`}>
                //     <Typography  component='p' sx={{width:'max-content',fontWeight:300,fontSize:{xs:'.6em',sm:'.75em'}}}>                    
                //     {i}
                //     </Typography>
                // </Link>
                return  <MenuHover img={i.img} key={i.cate} category={i.cate} subcategories={i.subCate}/>
            })} */}


        </Container>
        {/* <MenuHover category='HOVER HERE' subcategories={['test','test2']}/> */}
    </Box>
  )
}

export default NavButtom