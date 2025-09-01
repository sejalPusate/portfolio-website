import React from "react";

const ImageWithFallback = ({ src, alt, fallback, ...props }) => {
  const handleError = (e) => {
    e.target.src = fallback;
  };

  return <img src={src} alt={alt} onError={handleError} {...props} />;
};

export default ImageWithFallback;  // <-- IMPORTANT
