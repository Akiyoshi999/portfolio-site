import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { products } from "../../../const/productItems";
import ProductCard from "../../ui/Card/ProductCard";
import GridProduct from "../../ui/Grid/GridProduct";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";

const SkillProduct = () => {
  return (
    <SectionBox id="skill-artifact" backgroundColor="gray">
      <Box textAlign="center">
        <SectionTitle>My Product</SectionTitle>
        <Typography variant="body"></Typography>
      </Box>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        // alignItems="stretch"
      >
        {products.map((product, ind) => (
          <GridProduct key={ind}>
            <ProductCard {...product} />
          </GridProduct>
        ))}
      </Grid>
    </SectionBox>
  );
};

export default SkillProduct;
