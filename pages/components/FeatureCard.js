import React from "react";
import Image from "next/image";

export default function FeatureCard(props) {
  return (
    <>
      <div
        className={`relative flex flex-col items-center ${props.bgColor} px-16 py-14 rounded-2xl text-center transform transition-transform ease-linear duration-200 hover:-translate-y-4`}
      >
        <Image
          src={props.imgSrc}
          alt={props.title}
          srcSet={`"${props.imgSrc} 2x"`}
          width={props.width}
          height={props.height}
        />
        <h2 className="text-[#030a95] text-[28px] leading-[36px] tracking-[-1px] font-bold mt-16 mb-5">
          {props.title}
        </h2>
        <p className="font-light">
          <span className="font-bold">{props.brandName}</span>&nbsp;
          {props.info}
        </p>
        <p className="text-[#4F566B] text-sm leading-5 tracking-tighter mt-2">
          {props.quote}
        </p>
      </div>
    </>
  );
}
