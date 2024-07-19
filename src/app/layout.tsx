import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: `Urban Gentleman | Shop Men's Accessories in Lebanon | Watch Boxes & Stands`,
    description: `premium men's accessories at Urban Gentleman. Shop now for stylish watch boxes and elegant watch stands in Lebanon. Elevate your style with quality craftsmanship.`,
    icons: {
        icon: `https://ucarecdn.com/622a1d2d-b122-4eea-ab67-3365caf78a77/uglogofullCopy.PNG`
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
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
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
