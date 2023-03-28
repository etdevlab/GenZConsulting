import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroLanding from '@/components/HeroLanding'
import NavBar from '@/components/NavBar'
import Spacer from '@/components/Spacer'
import CardElement from '@/components/CardElement'
import TestimonialSlider from '@/components/TestimonialSlider'
import ContactUsForm from '@/components/ContactUsForm'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import AboutUsContainer from '@/components/AboutUsContainer'
import CapabilitiesContainer from '@/components/CapabilitiesContainer'
import TestimonialSection from '@/components/TestimonialSection'
import ContactUs from '@/components/ContactUs'
import { Toaster } from 'sonner'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    document.body.scrollTop = 0;
    var myNav = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      let scrollTop =  window.scrollY;
      if (scrollTop >= 1 ) {
        myNav.classList.add("filled");
      } 
      else {
          myNav.classList.remove("filled");
      }
    })

  }, [])
  
  return (
    <>
      <Head>
        <title>Gen Z Consulting</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-right"/>
      <main className="flex flex-col relative">
        <NavBar/>
        <HeroLanding/>

        <Spacer/>
        <Spacer/>

        <AboutUsContainer/>

        <CapabilitiesContainer/>
        
        <Spacer></Spacer>
        
        <TestimonialSection/>

        <Spacer></Spacer>      
        
        <ContactUs></ContactUs>

        <Footer></Footer>
      </main>
    </>
  )
}
