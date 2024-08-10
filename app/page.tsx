import { Container } from "@mui/material";
import "@madzadev/image-slider/dist/index.css";

import ProductSlider from "@/components/ProductSlider";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  return (
    <>
      <ProductSlider />
      <Container maxWidth="lg">
        <ProductItem />
      </Container>
    </>
  );
}
