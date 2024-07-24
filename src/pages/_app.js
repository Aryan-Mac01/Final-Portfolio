import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"
import Footer from '@/components/Footer/Footer'
//import { gsap } from 'gsap'
//import ScrollTrigger from 'gsap/ScrollTrigger'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

//gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  <main className={`${montserrat.variable} font-mont bg-gradient-to-b from-blue-50 to-red-100 w-full min-h-screen`}>
    <Navbar/>
    <Component {...pageProps} />
    
  </main>
  </>
  
  )
}
