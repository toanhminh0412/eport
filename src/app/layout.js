// Next imports
import { Inter } from 'next/font/google'
import { cookies } from "next/headers";

// Local imports
import './globals.css'
import UpperNav from '@/components/layout/UpperNav';
import Footer from '@/components/layout/Footer';
import ChangePasswordModal from '@/components/ui/ChangePasswordModal';
import { getUserFromToken } from '@/helpers/authentication';
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eport',
  description: 'Eport is the easiest way for job seekers to build a website to show their works and information.',
}

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const userToken = cookieStore.get('eport-token') ? cookieStore.get('eport-token').value : null;
  const isLoggedIn = userToken ? true : false;
  const user = getUserFromToken(userToken);

  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <meta name="keywords" content="eport, Eport, eport.site, website, website builder, simple, easy, simple website builder, easy website builder, the simplest website builder, the easiest website builder, job, job seekers, convenient, no-code, no design, no coding, no coding needed, no coding required, no design needed, no design required, portfolio, portfolio builder, simplest portfolio builder, easiest portfolio builder, simple portfolio builder, easy portfolio builder, personal website, personal porfolio, personal"/>
        <meta name="generator" content="Eport - the easiest way for job seekers to build a website to show their works and information." />

        <meta name="google-site-verification" content="CcLS5kalq0t1-UtZAeY7oSQACSXROO0nmytbDpXz_kw" />
        
        {/* Open graph tags */}
        <meta property="og:image" content="/favicon/android-chrome-192x192.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta property="og:image:alt" content="Eport - the easiest way for job seekers to build a website to show their works and information." />

        {/* Twitter tags */}
        <meta name="twitter:image" content="/favicon/android-chrome-192x192.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="192" />
        <meta name="twitter:image:height" content="192" />
        <meta property="twitter:image:alt" content="Eport - the easiest way for job seekers to build a website to show their works and information." />
      </head>
      <body className={`${inter.className} pt-16 pb-[400px] xs:pb-[340px] bg-slate-100 w-screen min-h-screen relative`}>
        <UpperNav isLoggedIn={isLoggedIn} email={user ? user.email : null}/>
        {isLoggedIn ? <ChangePasswordModal /> : null}
        {children}
        <Analytics />
        <Footer isLoggedIn={isLoggedIn}/>
      </body>
    </html>
  )
}
