import * as React from 'react'
const SvgPen = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m2.083 17.917 4.625-1.779c.296-.114.444-.17.582-.245.123-.066.24-.142.35-.228.124-.096.236-.208.46-.432l9.4-9.4A2.357 2.357 0 1 0 14.167 2.5l-9.4 9.4c-.224.224-.336.336-.432.46a2.5 2.5 0 0 0-.228.35c-.074.139-.131.286-.245.582l-1.779 4.625Zm0 0 1.716-4.46c.122-.319.184-.478.289-.551a.417.417 0 0 1 .316-.067c.126.024.246.145.488.386l1.883 1.883c.242.242.362.363.386.488a.417.417 0 0 1-.067.316c-.073.105-.232.167-.551.29l-4.46 1.715Z"
      stroke="currentColor"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgPen
