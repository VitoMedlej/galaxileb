import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: `E.Architecture - Premium Home Decor & Metal Furniture in Lebanon`,
    description: `E.Architecture | your go-to online store in Lebanon for premium home decor and handcrafted metal furniture. From concept to creation, upgrade your living space with our unique designs and high-quality accessories.`,
    icons: {
        icon: `https://ucarecdn.com/c9d6219c-d35c-4f91-a252-73ce3e75b5af/ealogo.PNG`
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

            <body className='relative bg3'>

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
