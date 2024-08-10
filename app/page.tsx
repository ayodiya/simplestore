import Image from "next/image";
import Typography from "@mui/material/Typography";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

import ProductSlider from "@/components/ProductSlider";

export default function Home() {
  return <ProductSlider />;
}
