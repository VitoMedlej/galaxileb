import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: `Shop Stylish Sportswear in Lebanon | E.Architecture`,
    description: `Discover stylish and comfortable sportswear at E.Architecture in Lebanon. Shop gym wear in various colors and elevate your workout with our premium collection.`,
    icons: {
        icon: `https://ucarecdn.com/0e233b8c-0b1a-438b-ac58-019da36991d8/shieldlogosmaller.jpg`
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
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500&family=Lora:wght@400&display=swap" rel="stylesheet"/>
           
           </head>

            <body className='relative'>

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
