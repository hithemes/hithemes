import React from 'react'

export default function Avatar({ src, alt }) {
  return (
    <>
      <img
        className="w-10 h-10 flex-shrink-0 rounded-full"
        src={src}
        alt={alt}
      />
    </>
  )
}
