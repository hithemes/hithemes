import Head from "next/head";
import Layout from "./components/Layout";
import Image from "next/image";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HiThemes | High-Quality Premium Themes</title>
        <meta name="description" content="High-Quality Premium Themes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-2 gap-[60px]">
          <div className="flex flex-col items-start gap-[60px]">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/img/hidocs-logo.svg"
                alt="HiDocs Premium Documentation Logo"
                width={234}
                height={75}
              />
              <p className="mt-5 text-2xl leading-8 tracking-tighter font-extra-light px-6">
                <span className="font-bold">HiDocs</span> helps you publish
                beautiful documents for your users and easily share your teams
                knowledge.
              </p>
            </div>
            <FeatureCard
              title="Documentation is Now Easy"
              info="Create a document base without the need for any coding! The documentation theme allows you to document all of your projects quickly and efficiently."
              brandName=""
              quote=""
              bgColor="bg-[#f1fbff]"
              imgSrc="/img/documentation-is-now-easy.png"
              width="279"
              height="256"
            />
            <FeatureCard
              title="Customizable & Flexible"
              info=" is customizable*, so you can change the look and feel of your documents. You can also easily create new pages or edit the styles of existing pages to add your personal touch."
              brandName="HiDocs"
              quote="*Requires code knowledge."
              bgColor="bg-[#FFFCF0]"
              imgSrc="/img/customizable-and-flexible.png"
              width="305"
              height="230"
            />
          </div>
          <div className="flex flex-col items-start gap-[60px]">
            <FeatureCard
              title="Beautiful & Responsive"
              info="is beautifully designed with a responsive layout, so it looks great on any device. In addition, the clean lines and typography will match your website's style."
              brandName="HiDocs"
              quote=""
              bgColor="bg-[#FFF9FA]"
              imgSrc="/img/beautiful-and-responsive.png"
              width="300"
              height="222"
            />
            <FeatureCard
              title="Get started in seconds!"
              info="is built with Ghost - meaning no setup required! Once installed, add your content and start documenting. It's that simple."
              brandName="HiDocs"
              quote=""
              bgColor="bg-[#F9F9FF]"
              imgSrc="/img/get-started-in-seconds.png"
              width="285"
              height="252"
            />
            <FeatureCard
              title="Currently only compatible with Ghost 4.0"
              info="has been designed and coded on the powerful Ghost infrastructure for now. However, you will be able to use it in other CMS infrastructures soon."
              brandName="HiDocs"
              quote=""
              bgColor="bg-[#F0FFEF]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
