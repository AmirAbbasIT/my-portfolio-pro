import React from "react";

export default function Img({ src, alt, className, ...rest }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} {...rest} />
  );
}
