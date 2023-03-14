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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    var myNav = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      let scrollTop =  window.scrollY;
      console.log(scrollTop);
      if (scrollTop >= 1 ) {
        myNav.classList.add("filled");
        console.log("Hello! 3");
      } 
      else {
          myNav.classList.remove("filled");
          console.log("Hello!");
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
      <main className="flex flex-col relative">
        <NavBar/>
        <HeroLanding/>
        <Spacer/>
        <div className="parallax-container w-full placeholder:">

        </div>
        <div className="svg-container w-full flex flex-col items-center">
          <Spacer></Spacer>
          <Spacer></Spacer>
          <div className="flex flex-col gap-y-8 md:flex-row justify-center w-full sm:w-full sm:max-w-[1280px]">
            <section className="flex flex-col w-full px-6 md:w-[40%] lg:w-1/3 gap-y-2">
              <p className="text-xs md:text-sm text-violet-800 font-light">MOVE AT THE SPEED OF INNOVATION, COMPROMISE NOTHING</p>
              <h1 className="text-2xl md:text-3xl font-semibold">Focus on Growth, While We Focus on Everything Else</h1>
              <hr className="mr-8 mt-2 b-2 border-violet-800"></hr>
              <p className="text-xs font-regular leading-5 text-gray-700 mt-2">Our multidisciplinary team of experts brings together diverse skill sets and perspectives to provide the highest level of service to our clients. From Talent Acquisition Services (TAS) to Financial Management, and Government Contract Management to Business Management, we offer customized solutions tailored to meet the unique needs of each client.</p>
            </section>
            <section className="flex flex-col px-6 md:p-0 gap-y-4 w-full md:w-[40%] lg:w-[55%]">
                  <div className="flex flex-row w-full gap-x-4">
                    <CardElement header={"Talent Acquisition Services"} link="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"/>
                    <CardElement header={"Contract and Acquisition Management"} link="https://images.unsplash.com/photo-1561930187-90c5428665af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
                  </div>
                  <div className="flex flex-row-reverse w-full gap-x-4">
                    <CardElement header={"Business Management"} link="https://images.unsplash.com/photo-1604933762161-67313106146c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                    <CardElement header={"Financial Management"} link="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                  </div>

            </section>
          </div>
          <Spacer></Spacer>
          <Spacer></Spacer>
        </div>
        <Spacer></Spacer>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col gap-y-2 w-full px-6 md:px-0 sm:max-w-[1280px]">
              <section className="flex flex-col w-full items-center gap-y-2">
                <p className="text-xs md:text-sm text-violet-800 font-light">WE PRIDE OURSELVES IN DELIVERING THE HIGHEST LEVEL OF SERVICE</p>
                <h1 className="text-2xl md:text-3xl font-semibold">Our Clients</h1>
                <p className="text-xs max-w-[600px] text-center font-regular leading-5 text-gray-700 mt-2">Learn more about how Gen Z Consulting has been able to take the Business Operations of our Federal and Commercial clients alike to the next level.</p>
              </section>
              <section className="flex justify-center items-center overflow-x-hidden">
                <TestimonialSlider clientTestimonials={
                  [
                    {
                      logo:"/google-logo-png.png",
                      name: "Andrej Kumar",
                      role: "Principal SDVOSB Marketing and Communications, Google",
                      highlight: "“Thanks to Gen Z Consulting's assistance, we have been able to achieve significant improvements in our overall efficiency and productivity.”",
                      quote: "Before working with Gen Z Consulting, our Talent Acquisition consumed a lot of our time and resources. However, after partnering with Gen Z Consulting, we were able to consolidate and automate our entire Talent Acquisition process. Their expert consultants developed a customized solution that perfectly suited our needs, saving us countless hours and freeing up resources that we could now allocate to other areas of our business.",
                      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                    }, 
                    {
                      logo: "/et-logo.png",
                      name: "Anton Salvador",
                      role: "Chief Marketing Officer, Emerging Tech LLC",
                      highlight: "“Gen Z Consulting has been an exceptional partner in helping our company handle Contract Procurement”",
                      quote: "Their team of experts provided us with invaluable guidance and support throughout the entire process, from the initial planning stage to the final contract negotiation. Their attention to detail ensured that we submitted competitive proposals that met all of the necessary requirements. ",
                      image: "https://media.licdn.com/dms/image/C4E03AQEWCtVoMAPX-Q/profile-displayphoto-shrink_400_400/0/1646962052814?e=1684368000&v=beta&t=gsQka-pCBRPvIOiiuni8FkIWpcHgc-TleK0emNxc1O4"
                    }
                  ]
                }/>
              </section>
          </div>
        </div>
        <Spacer></Spacer>
        <div className="contact-background flex flex-col w-full items-center">
            <section className="flex flex-col gap-y-4 md:flex-row w-full sm:max-w-[1280px] justify-center">
              <section className="flex flex-col w-full px-6 md:w-[40%] lg:w-2/5 gap-y-2">
                <Spacer></Spacer>
                <Spacer></Spacer>
                <p className="text-xs md:text-sm text-violet-200 font-light">CONNECT WITH AN EXPERT</p>
                <h1 className="text-2xl md:text-3xl mb-1 font-semibold text-white">Get In Contact</h1>
                <hr className="mr-8 mt-2 b-2 border-violet-300"></hr>
                <p className="text-xs font-regular leading-5 text-white mt-2">Our team is committed to delivering exceptional service and results, and we take pride in building long-term relationships with our clients based on trust, integrity, and mutual respect. With Gen Z Consulting, you can rest assured that you have a partner who is invested in your success. </p>
                <p className="text-xs font-regular leading-5 text-white mt-2">If you would like to learn more about our services, discuss a potential project, or inquire about a career opportunity, please feel free to contact us. </p>

              </section>
              <section className="flex flex-col w-full px-6 md:px-2 md:w-[40%] lg:w-2/5 py-8 gap-y-2">
                <ContactUsForm></ContactUsForm>
              </section>
            </section>
        </div>
        <Footer></Footer>
      </main>
       
    </>
  )
}
