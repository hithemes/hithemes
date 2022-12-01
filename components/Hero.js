import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section
        className="bg-no-repeat bg-cover lg:h-[800px] px-4 pb-12 lg:pb-0 pt-32"
        style={{
          backgroundImage: 'url("/img/hero-bg.png")'
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between h-full">
          <div className="sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl text-[#03076c] sm:pr-4 mt-8 sm:mt-0 text-center sm:text-left">
            <h1 className="text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[68px] leading-[44px] sm:leading-[56px] lg:leading-[66px] xl:leading-[76px] font-light tracking-[-1px] md:tracking-[-1.7px] lg:tracking-[-3.5px] mb-3 lg:mb-10">
              Now it&apos;s time for <br />{' '}
              <span className="font-bold">high-quality themes!</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-[28px] leading-normal lg:leading-[36px] font-light tracking-[-1px]">
              Beautiful, responsive, and easy-to-use HiThemes themes for your
              website are now with you.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/img/hi.png"
              alt="Picture of the author"
              srcSet="/img/hi.png 2x"
              width={555}
              height={576}
            />
          </div>
        </div>
      </section>
    </>
  )
}
