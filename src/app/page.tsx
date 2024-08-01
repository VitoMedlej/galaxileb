import PreLoader from '@/Components/PreLoader'
import { Getcategories } from '@/Utils/Getcategories'
import { Getimages } from '@/Utils/Getimages'
import { Getproducts } from '@/Utils/Getproducts'


const Home = async () => {
  const categoriesData = await Getcategories()
  const productsResponse = await Getproducts()
  const ImagesResponse = await Getimages()
  // console.log('ImagesResponse: ', ImagesResponse);
  // DO NOT ask me why the data is nested the way it is
  // I wrote it at 1am in the morning, HALF ASLEEP  
  
  console.log('ImagesResponse: ', ImagesResponse);
  const categories = categoriesData?.success !== false ? categoriesData?.Categories[0]?.cateArray : null;
  let imagesArray1 = ImagesResponse.success && ImagesResponse.data && ImagesResponse.data?.Images?.length > 0 && ImagesResponse.data.Images[0].imagesArray.length > 0 ? ImagesResponse.data.Images[0].imagesArray : null;
  let imagesArray2 = ImagesResponse.success && ImagesResponse.data2 && ImagesResponse.data?.Images?.length > 0 && ImagesResponse.data2.Images2[0].imagesArray.length > 0 ? ImagesResponse.data2.Images2[0].imagesArray : null;
  return (
    <PreLoader
    // categories={null}
    categories={categories}
    // resImages={null}
    resImages={imagesArray1}
    secondSectionImage={imagesArray2}
    // data={null}
    data={productsResponse?.data?.featuredProducts}
  />
  )
}

export const revalidate = 0
export default Home