import PreLoader from '@/Components/PreLoader'
import { Getcategories } from '@/Utils/Getcategories'
import { Getimages } from '@/Utils/Getimages'
import { Getproducts } from '@/Utils/Getproducts'


const Home = async () => {
  const categoriesData = await Getcategories()
  const productsResponse = await Getproducts()
  const ImagesResponse = await Getimages()
  console.log('ImagesResponse: ', ImagesResponse);
  // DO NOT ask me why the data is nested the way it is
  // I wrote it at 1am in the morning, HALF ASLEEP  
  
  const categories = categoriesData?.success !== false ? categoriesData?.Categories[0]?.cateArray : null;
  const images = ImagesResponse?.success !== false && ImagesResponse?.data?.Images[0]?.imagesArray;
  const secondSectionImage = ImagesResponse?.success !== false && ImagesResponse?.data2?.Images[0]?.imagesArray;
  return (
    <PreLoader
    // categories={null}
    categories={categories}
    // resImages={null}
    resImages={images}
    secondSectionImage={secondSectionImage}
    // data={null}
    data={productsResponse?.data?.featuredProducts}
  />
  )
}

export const revalidate = 0
export default Home