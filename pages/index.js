import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import FeatureCard from '../components/FeatureCard'
import Image from 'next/image'
import Link from 'next/link'

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
          <div id="themes" className="grid sm:grid-cols-2 gap-10 lg:gap-[60px]">
            <div className="flex flex-col items-start gap-10 lg:gap-[60px]">
              <div className="flex flex-col items-center text-center">
                <Link href="https://hidocs.hithemes.io">
                  <a target="_blank">
                    <img
                      className="w-[158px] h-[50px] lg:w-[234px] lg:h-[75px]"
                      src="/img/hidocs-logo.svg"
                      alt="HiDocs Premium Documentation Logo"
                    />
                  </a>
                </Link>
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
            <Link href="https://hidocs.hithemes.io">
              <a
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
                target="_blank"
              >
                Get Started with HiDocs Today
              </a>
            </Link>
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
        id="support"
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
      <section id="custom-work" className="px-4 pt-16 lg:pt-36 pb-24">
        <div className="max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto text-[#03076c] sm:pr-4 mb-16 lg:mb-24 text-center">
          <span className="inline-block text-xs sm:text-base text-[#A3ACB9] tracking-[22px] md:tracking-[26px] lg:tracking-[34px] mb-3 lg:mb-4 text-center">
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
      </section>
      <section
        id="contact"
        className="bg-no-repeat bg-cover px-4 pt-20 pb-44"
        style={{
          backgroundImage: 'url("/img/hero-bg.png")'
        }}
      >
        <div className="max-w-screen-xl mx-auto h-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-[#03076c] sm:pr-4 mb-16 lg:mb-24 text-center">
              <span className="inline-block text-xs sm:text-base text-[#A3ACB9] tracking-[22px] md:tracking-[26px] lg:tracking-[34px] mb-3 lg:mb-4 text-center">
                CONTACT US
              </span>
              <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[68px] leading-[44px] sm:leading-[56px] lg:leading-[66px] xl:leading-[76px] font-light tracking-[-1px] md:tracking-[-1.7px] lg:tracking-[-3.5px] mb-3 lg:mb-6">
                Do you need something? <br />{' '}
                <span className="font-bold">Get in touch!</span>
              </h1>
              <p className="text-[#4F566B] text-lg sm:text-xl lg:text-[24px] leading-normal lg:leading-[32px] font-light tracking-[-0.8px]">
                If you have any queries or want to learn more about us, please{' '}
                <br /> fill out this form, and we will get back to you as soon
                as possible.
              </p>
            </div>
            <form action="#" method="POST" className="grid grid-cols-2 gap-2">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-4">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.9362 9.556C13.5964 8.75349 14 7.67976 14 6.5C14 4.01472 12.2091 2 10 2C7.79086 2 6 4.01472 6 6.5C6 7.67976 6.40355 8.75349 7.06383 9.556C4.09823 10.7267 2 13.6183 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 13.6863 6.68629 11 10 11C13.3137 11 16 13.6863 16 17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17C18 13.6183 15.9018 10.7267 12.9362 9.556ZM12 6.5C12 8.10867 10.8896 9 10 9C9.11038 9 8 8.10867 8 6.5C8 4.89133 9.11038 4 10 4C10.8896 4 12 4.89133 12 6.5Z"
                        fill="#8792A2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-4 pr-4 pl-12 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-0 rounded-md"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-4">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3C2.34315 3 1 4.34315 1 6V14C1 15.6569 2.34315 17 4 17H16C17.6569 17 19 15.6569 19 14V6C19 4.34315 17.6569 3 16 3H4ZM3.29508 5.29071C3.47587 5.11103 3.72497 5 4 5H16C16.275 5 16.5241 5.11103 16.7049 5.29071L10 8.86667L3.29508 5.29071ZM3 7.4V14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V7.4L10.4706 10.8824C10.1765 11.0392 9.82353 11.0392 9.52941 10.8824L3 7.4Z"
                        fill="#8792A2"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-4 pr-4 pl-12 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-0 rounded-md"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-5 left-4">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 2C2.34314 2 1 3.34315 1 5V13C1 14.6569 2.34314 16 4 16V18C4 18.3603 4.19379 18.6927 4.50732 18.8702C4.8208 19.0477 5.20557 19.0429 5.51453 18.8575L10.277 16H16C17.6569 16 19 14.6569 19 13V5C19 3.34315 17.6569 2 16 2H4ZM3 5C3 4.44772 3.44769 4 4 4H16C16.5523 4 17 4.44772 17 5V13C17 13.5523 16.5523 14 16 14H10C9.81873 14 9.64093 14.0493 9.48547 14.1425L6 16.2338V15C6 14.4477 5.55231 14 5 14H4C3.44769 14 3 13.5523 3 13V5Z"
                        fill="#8792A2"
                      />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={10}
                    className="block w-full shadow-sm py-4 pr-4 pl-12 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-0 rounded-md"
                    placeholder="Comment"
                  ></textarea>
                </div>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white space-x-2 bg-[#0511F2] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                >
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.5 2C9.5 1.44772 9.94772 1 10.5 1C11.0523 1 11.5 1.44772 11.5 2V3C11.5 3.03342 11.4984 3.06646 11.4952 3.09904C13.7798 3.56044 15.5 5.57933 15.5 8V10.382L15.9223 10.5931C16.8892 11.0766 17.5 12.0648 17.5 13.1459C17.5 14.7222 16.2222 16 14.6459 16H6.3541C4.77783 16 3.5 14.7222 3.5 13.1459C3.5 12.0648 4.11078 11.0766 5.07771 10.5931L5.5 10.382V8C5.5 5.57933 7.22019 3.56044 9.50484 3.09904C9.50164 3.06646 9.5 3.03342 9.5 3V2ZM7.5 8C7.5 6.34315 8.84315 5 10.5 5C12.1569 5 13.5 6.34315 13.5 8V11C13.5 11.3788 13.714 11.725 14.0528 11.8944L15.0279 12.382C15.3172 12.5266 15.5 12.8224 15.5 13.1459C15.5 13.6176 15.1176 14 14.6459 14H6.3541C5.88239 14 5.5 13.6176 5.5 13.1459C5.5 12.8224 5.68278 12.5266 5.97214 12.382L6.94721 11.8944C7.286 11.725 7.5 11.3788 7.5 11V8Z"
                      fill="#F2F3FF"
                    />
                    <path
                      d="M9.5 17C8.94772 17 8.5 17.4477 8.5 18C8.5 18.5523 8.94772 19 9.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18C12.5 17.4477 12.0523 17 11.5 17H9.5Z"
                      fill="#F2F3FF"
                    />
                  </svg>
                  <span>Get in touch!</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
