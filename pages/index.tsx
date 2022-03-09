import Head from 'next/head'
import Layout from './components/Layout'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HiThemes | High-Quality Premium Themes</title>
        <meta name="description" content="High-Quality Premium Themes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 py-20">
        <div className="lg:pb-20 pb-14">
          <div className="text-center mb-20">
            <span className="inline-block text-[#A3ACB9] tracking-[22px] md:tracking-[26px] lg:tracking-[34px] mb-3 lg:mb-5 text-center">
              THEME
            </span>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[68px] leading-[44px] sm:leading-[54px] lg:leading-[76px] tracking-[-1px] lg:tracking-[-3.5px] text-[#03076C] font-light mb-7">
              Amazing documentation <br />{' '}
              <span className="font-bold">starts on HiDocs!</span>
            </h2>
            <p className="max-w-xl mx-auto text-[#1A1F36] font-light text-lg sm:text-2xl">
              <span className="font-bold">HiDocs</span> is an elegantly
              designed, responsive documentation theme with a fresh, modern
              look.{' '}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10 lg:gap-[60px]">
            <div className="flex flex-col items-start gap-10 lg:gap-[60px]">
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-[158px] h-[50px] lg:w-[234px] lg:h-[75px]"
                  src="/img/hidocs-logo.svg"
                  alt="HiDocs Premium Documentation Logo"
                />
                <p className="mt-5 text-lg sm:text-2xl leading-8 text-[#4F566B] tracking-tighter font-light px-6">
                  <span className="font-bold">HiDocs</span> helps you publish
                  beautiful documents for your users and easily share your teams
                  knowledge.
                </p>
              </div>
              <FeatureCard
                isImg={true}
                isQuote={false}
                title="Documentation is Now Easy"
                info="Create a document base without the need for any coding! The documentation theme allows you to document all of your projects quickly and efficiently."
                brandName=""
                bgColor="bg-[#f1fbff]"
                imgSrc="/img/documentation-is-now-easy.png"
              />
              <FeatureCard
                isImg={true}
                isQuote={true}
                title="Customizable & Flexible"
                info=" is customizable*, so you can change the look and feel of your documents. You can also easily create new pages or edit the styles of existing pages to add your personal touch."
                brandName="HiDocs"
                quote="*Requires code knowledge."
                bgColor="bg-[#FFFCF0]"
                imgSrc="/img/customizable-and-flexible.png"
              />
            </div>
            <div className="flex flex-col items-start gap-10 lg:gap-[60px]">
              <FeatureCard
                isImg={true}
                isQuote={false}
                title="Beautiful & Responsive"
                info="is beautifully designed with a responsive layout, so it looks great on any device. In addition, the clean lines and typography will match your website's style."
                brandName="HiDocs"
                bgColor="bg-[#FFF9FA]"
                imgSrc="/img/beautiful-and-responsive.png"
              />
              <FeatureCard
                isImg={true}
                isQuote={false}
                title="Get started in seconds!"
                info="is built with Ghost - meaning no setup required! Once installed, add your content and start documenting. It's that simple."
                brandName="HiDocs"
                bgColor="bg-[#F9F9FF]"
                imgSrc="/img/get-started-in-seconds.png"
              />
              <FeatureCard
                isImg={false}
                isQuote={false}
                title="Currently only compatible with Ghost 4.0"
                info="has been designed and coded on the powerful Ghost infrastructure for now. However, you will be able to use it in other CMS infrastructures soon."
                brandName="HiDocs"
                bgColor="bg-[#F0FFEF]"
              />
            </div>
          </div>
        </div>
        <div
          className="
            bg-[#F2F3FF]
            rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4
          "
        >
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <h2 className="text-[#03076c] text-2xl leading-[32px] font-light mb-20">
              Inspired by how startups organize their businesses, we build clear
              documentation for high-performance applications.
            </h2>
            <a
              href="#"
              className="
                  inline-flex
                  items-center
                  bg-[#0511F2]
                  text-white
                  mt-8 px-10 py-3
                  text-base
                  font-medium
                  border border-transparent
                  transform transition-transform ease-linear duration-200
                  rounded-md hover:bg-opacity-90 hover:-translate-y-1
                "
            >
              Get Started with HiDocs Today
            </a>
            <span className="inline-block mt-3 text-sm text-[#03076c]">
              Available in Ghost Theme Marketplace.
            </span>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="
                transform translate-x-4 rounded-md object-cover object-left-top lg:translate-y-20
              "
              src="/img/hidocs.png"
              alt="App screenshot"
              srcSet="/img/hidocs.png 2x"
            />
          </div>
        </div>
      </div>
      <section
        className="bg-no-repeat bg-cover md:h-[500px] lg:h-[800px] px-4 py-32 md:py-0"
        style={{
          backgroundImage: 'url("/img/hero-bg.png")'
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between h-full">
          <div className="sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl text-[#03076c] sm:pr-4 mt-16 sm:mt-0 text-center sm:text-left">
            <span className="inline-block text-[#A3ACB9] tracking-[22px] md:tracking-[26px] lg:tracking-[34px] mb-3 lg:mb-4 text-center">
              SUPPORT
            </span>
            <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[68px] leading-[44px] sm:leading-[56px] lg:leading-[66px] xl:leading-[76px] font-light tracking-[-1px] md:tracking-[-1.7px] lg:tracking-[-3.5px] mb-3 lg:mb-10">
              High-Quality <br />{' '}
              <span className="font-bold">Customer Services</span>
            </h1>
            <p className="text-[#4F566B] text-lg sm:text-xl lg:text-[24px] leading-normal lg:leading-[32px] font-light tracking-[-0.8px]">
              We know how vital customer service is, so we do all we can to
              ensure the highest level of support possible.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/img/high-quality-customer-service.png"
              alt="High Quality customer Services"
              width={450}
              height={384}
            />
          </div>
        </div>
      </section>
      <div className="px-4">
        <div className="max-w-4xl mx-auto -mt-[60px]">
          <div className="grid sm:grid-cols-2 items-center gap-8 bg-[#040ECE] px-12 py-9 sm:py-6 md:py-10 rounded-2xl">
            <h2 className="text-base md:text-[28px] leading-7 md:leading-[36px] font-light tracking-tighter text-white text-center sm:text-left">
              Need to ask us something <br /> about our products?
            </h2>
            <div className="text-center sm:text-right">
              <a
                href="#"
                className="whitespace-nowrap inline-flex md:inline-flex items-center justify-center px-4 md:px-[20px] py-[12px] border border-transparent rounded-md shadow-[0px 4px 15px rgba(3, 7, 108, 0.2);] text-base font-medium text-[#030CAF] space-x-2 bg-white hover:bg-opacity-90"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.23423 17.997C9.07826 18.001 8.92221 18.001 8.76624 17.997C7.02581 17.9518 5.33581 17.4029 3.90093 16.4169C2.46605 15.4309 1.34783 14.05 0.681697 12.4414C0.229043 11.3435 -0.00260328 10.167 2.20679e-05 8.97946C0.00264741 7.79188 0.239493 6.61647 0.696997 5.52055C1.14672 4.45063 1.79885 3.47763 2.61756 2.65501L2.65536 2.61721C3.47409 1.80271 4.44172 1.15314 5.5056 0.703844C6.61016 0.240188 7.79592 0.000929768 8.99384 2.70447e-06C10.1918 -0.000924359 11.3779 0.236498 12.4832 0.698444C13.554 1.14904 14.5277 1.80242 15.3505 2.62261L15.3775 2.64961C16.1992 3.47489 16.8625 4.45857 17.3152 5.55025C17.7855 6.68653 18.0183 7.90705 17.9992 9.13668C17.9724 10.9025 17.4269 12.6214 16.4306 14.0795C15.4343 15.5377 14.0312 16.6706 12.3959 17.3373C11.3906 17.7457 10.3198 17.9692 9.23513 17.997H9.23423ZM10.829 12.1021L13.4156 14.6878C12.1523 15.6677 10.599 16.1996 9.00024 16.1996C7.40148 16.1996 5.84814 15.6677 4.58492 14.6878L7.17147 12.1012C7.72574 12.4273 8.35714 12.5993 9.00024 12.5993C9.64333 12.5993 10.2747 12.4273 10.829 12.1012V12.1021ZM5.8989 10.8286L3.31235 13.4152C2.3324 12.152 1.80053 10.5986 1.80053 8.99988C1.80053 7.40112 2.3324 5.84779 3.31235 4.58457L5.8989 7.17112C5.57277 7.72539 5.4008 8.35679 5.4008 8.99988C5.4008 9.64298 5.57277 10.2744 5.8989 10.8286ZM7.27407 9.51197C7.18009 9.19323 7.17573 8.85475 7.26147 8.53369C7.34303 8.22849 7.50386 7.95028 7.72766 7.72731C7.95054 7.50303 8.22882 7.34176 8.53421 7.25988C8.83961 7.17799 9.16125 7.17842 9.46643 7.26112C9.76162 7.34032 10.0415 7.49511 10.2728 7.72731C10.4971 7.95018 10.6584 8.22846 10.7402 8.53386C10.8221 8.83926 10.8217 9.16089 10.739 9.46607C10.6598 9.76127 10.505 10.0412 10.2728 10.2725C10.0499 10.4967 9.77166 10.658 9.46626 10.7399C9.16086 10.8218 8.83923 10.8213 8.53405 10.7386C8.22886 10.6571 7.95066 10.4962 7.72766 10.2725C7.51519 10.0609 7.35923 9.79944 7.27407 9.51197ZM10.829 5.89854C10.2747 5.57242 9.64333 5.40045 9.00024 5.40045C8.35714 5.40045 7.72574 5.57242 7.17147 5.89854L4.58492 3.31199C5.84814 2.33204 7.40148 1.80018 9.00024 1.80018C10.599 1.80018 12.1523 2.33204 13.4156 3.31199L10.829 5.89854ZM14.6881 13.4152C15.6681 12.152 16.1999 10.5986 16.1999 8.99988C16.1999 7.40112 15.6681 5.84779 14.6881 4.58457L12.1016 7.17112C12.4277 7.72539 12.5997 8.35679 12.5997 8.99988C12.5997 9.64298 12.4277 10.2744 12.1016 10.8286L14.6881 13.4152Z"
                    fill="#030CAF"
                  />
                </svg>
                <span>Contact Support Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-36 pb-24">
        <div className="sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-[#03076c] sm:pr-4 mt-16 sm:mt-0 mb-24 text-center">
          <span className="inline-block text-[#A3ACB9] tracking-[22px] md:tracking-[26px] lg:tracking-[34px] mb-3 lg:mb-4 text-center">
            CUSTOM WORK
          </span>
          <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[68px] leading-[44px] sm:leading-[56px] lg:leading-[66px] xl:leading-[76px] font-light tracking-[-1px] md:tracking-[-1.7px] lg:tracking-[-3.5px] mb-3 lg:mb-6">
            Need custom design? <br />{' '}
            <span className="font-bold">HiThemes is here!</span>
          </h1>
          <p className="text-[#4F566B] text-lg sm:text-xl lg:text-[24px] leading-normal lg:leading-[32px] font-light tracking-[-0.8px]">
            <span className="font-bold">HiThemes</span> can develop products for
            popular platforms to meet the specific needs of its clients.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14">
          <div className="flex flex-col items-center text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4">
            <Image
              src="/img/ghost.svg"
              alt="Theme & Newsletter Design & Code"
              width={142}
              height={140}
            />
            <h3 className="text-[#03076C] mt-4 mb-2 text-[22px] font-bold">
              Ghost
            </h3>
            <p className="text-[#4F566B] text-sm">
              Theme & Newsletter Design & Code
            </p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4">
            <Image
              src="/img/webflow.svg"
              alt="CMS Theme Design & Code"
              width={142}
              height={140}
            />
            <h3 className="text-[#03076C] mt-4 mb-2 text-[22px] font-bold">
              Webflow
            </h3>
            <p className="text-[#4F566B] text-sm">CMS Theme Design & Code</p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4">
            <Image
              src="/img/shopify.svg"
              alt="E-Commerce Theme Design & Code"
              width={142}
              height={140}
            />
            <h3 className="text-[#03076C] mt-4 mb-2 text-[22px] font-bold">
              Shopify
            </h3>
            <p className="text-[#4F566B] text-sm">
              E-Commerce Theme Design & Code
            </p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4">
            <Image
              src="/img/bubble.svg"
              alt="Build Web Apps Without Code"
              width={142}
              height={140}
            />
            <h3 className="text-[#03076C] mt-4 mb-2 text-[22px] font-bold">
              Bubble
            </h3>
            <p className="text-[#4F566B] text-sm">
              Build Web Apps Without Code
            </p>
          </div>
          <div className="flex flex-col items-center text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4">
            <Image
              src="/img/react.svg"
              alt="SAAS Startup Design & Code"
              width={142}
              height={140}
            />
            <h3 className="text-[#03076C] mt-4 mb-2 text-[22px] font-bold">
              Landing Page
            </h3>
            <p className="text-[#4F566B] text-sm">SAAS Startup Design & Code</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
