import React, { FC } from "react";
import Image from "next/image";

export interface SummaryInformationProps {
  bgColor: string;
  imgSrc?: string;
  title: string;
  width?: string;
  height?: string;
  brandName: string;
  info: string;
  quote: string;
}

const FeatureCard: FC<SummaryInformationProps> = ({
  bgColor,
  imgSrc,
  title,
  width,
  height,
  brandName,
  info,
  quote,
}) => {
  return (
    <>
      <div
        className={`relative flex flex-col items-center ${bgColor} px-16 py-14 rounded-2xl text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4`}
      >
        <Image src={imgSrc} alt={title} width={width} height={height} />
        <h2 className="text-[#030a95] text-[28px] leading-[36px] tracking-[-1px] font-bold mt-16 mb-5">
          {title}
        </h2>
        <p className="font-light">
          <span className="font-bold">{brandName}</span>&nbsp;
          {info}
        </p>
        <p className="text-[#4F566B] text-sm leading-5 tracking-tighter mt-2">
          {quote}
        </p>
      </div>
    </>
  );
};

export default FeatureCard;
