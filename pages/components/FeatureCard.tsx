import React, { FC } from "react";

export interface FeatureCardProps {
  bgColor: string;
  imgSrc?: string;
  title?: string;
  brandName: string;
  info: string;
  quote?: string;
  isImg: boolean;
  isQuote: boolean;
}

const FeatureCard: FC<FeatureCardProps> = ({
  bgColor,
  imgSrc,
  title,
  brandName,
  info,
  quote,
  isImg = false,
  isQuote = false,
}) => {
  return (
    <>
      <div
        className={`relative flex flex-col items-center ${bgColor} px-6 md:px-12 lg:px-16 py-14 rounded-2xl text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4`}
      >
        {isImg && <img src={imgSrc} alt={title} srcSet={`${imgSrc} 2x`} />}
        <h2
          className={`text-[#030a95] text-2xl lg:text-[28px] sm:leading-[30px] lg:leading-[36px] tracking-[-1px] font-bold ${
            isImg ? "mt-5 md:mt-8 lg:mt-16" : "mt-0"
          } mb-5`}
        >
          {title}
        </h2>
        <p className="font-light">
          <span className="font-bold">{brandName}</span>&nbsp;
          {info}
        </p>
        {isQuote && (
          <p className="text-[#4F566B] text-sm leading-5 tracking-tighter mt-2">
            {quote}
          </p>
        )}
      </div>
    </>
  );
};

export default FeatureCard;
