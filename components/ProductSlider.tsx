"use client";

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import "@madzadev/image-slider/dist/index.css";

import productImage1 from "../public/testImageSlider1.jpeg";
import productImage2 from "../public/testImageSlider2.jpeg";
import productImage3 from "../public/testImageSlider3.jpeg";
import productImage4 from "../public/testImageSlider4.jpeg";
import productImage5 from "../public/testImageSlider5.jpeg";

const images = [
  { url: productImage1.src },
  { url: productImage2.src },
  { url: productImage3.src },
  { url: productImage4.src },
  { url: productImage5.src },
];

export default function ProductSlider() {
  return (
    <>
      <Slider
        loop={true}
        autoPlay={true}
        autoPlayInterval={3000}
        showArrowControls={false}
        showDotControls={false}
        imageList={images}
        width="100%"
        height="100%"
      />
    </>
  );
}
