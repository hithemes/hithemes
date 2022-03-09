import Head from 'next/head'
import Layout from './components/Layout'
import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HiThemes | High-Quality Premium Themes</title>
        <meta name="description" content="High-Quality Premium Themes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
        <div className="py-20 pb-14">
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
    </Layout>
  )
}
