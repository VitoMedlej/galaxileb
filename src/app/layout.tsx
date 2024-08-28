import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: `Custom Apparel & Personalized Gifts in Lebanon | High-Quality T-Shirts, Mugs, Hats & More`,
    description: `From high-quality t-shirts, mugs, and hats to custom tumblers and more, we offer stylish and unique items perfect for any occasion. Whether you support the Lakers or have other favorite teams, our exclusive designs let you showcase your style`,
    icons: {
        icon: `https://ucarecdn.com/9b5cffe2-f48c-45c7-889f-f7f4c6b6ebf3/433814466_7377333325677954_8424387939180368658_n.jpg`
    }
}

export default function Layout({children} : {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
           
           </head>

            <body className='relative '>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar />
                    <QuickCart/>
                    <ScrollToTop/>
                    <main>
                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
