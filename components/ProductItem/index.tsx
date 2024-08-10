import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import laptop from "../../public/laptop.jpeg";
import styles from "./muiStyles";

interface productCard {
  product_id: number;
  name: string;
  description: string;
  price: number;
}

async function getProducts() {
  try {
    const response = await fetch(
      "https://fake-store-api.mock.beeceptor.com/api/products",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
}

// Reusable style object

export default async function ProductList() {
  const products = await getProducts();

  return (
    <Box sx={styles.container}>
      <Grid container direction="row" alignItems="center" spacing={3}>
        {products.map(
          ({ product_id, name, description, price }: productCard) => (
            <Grid key={product_id} item xs={12} md={4}>
              <Box sx={styles.productCard}>
                <Box sx={styles.innerBox}>
                  <Box sx={styles.imageContainer}>
                    <Image
                      src={laptop}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                    <Box sx={styles.productInfo}>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={styles.productName}
                      >
                        {name}
                      </Typography>
                      <Typography sx={styles.productDescription}>
                        {description}
                      </Typography>
                      <Box sx={styles.priceAndButton}>
                        <Typography
                          variant="h6"
                          component="span"
                          sx={styles.productPrice}
                        >
                          ${price}
                        </Typography>
                        <Button disableElevation variant="contained">
                          Add to cart
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
}
