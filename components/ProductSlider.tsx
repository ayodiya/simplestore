"use client";

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import "@madzadev/image-slider/dist/index.css";

import slider1 from "../public/slider1.jpeg";
import slider2 from "../public/slider2.jpeg";
import slider3 from "../public/slider3.jpeg";
import slider4 from "../public/slider4.jpeg";
import slider5 from "../public/slider5.jpeg";
import slider6 from "../public/slider6.jpeg";

const images = [
  { url: slider1.src },
  { url: slider2.src },
  { url: slider3.src },
  { url: slider4.src },
  { url: slider5.src },
  { url: slider6.src },
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
        height="400px"
      />
    </>
  );
}
