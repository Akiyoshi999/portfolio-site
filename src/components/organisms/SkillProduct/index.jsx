import { Grid, Typography } from "@mui/material";
import { products, productSection } from "../../../const/productItems";
import SectionBox from "../../ui/Section/SectionBox";
import SectionTitle from "../../ui/Section/SectionTitle";
import ProductCard from "../../molecules/ProductCard";

const CardGrid = (props) => (
  <Grid
    xs={12}
    sm={6}
    md={4}
    item
    display="flex"
    justifyContent="center"
    {...props}
  >
    {props.children}
  </Grid>
);

const SkillProduct = () => {
  return (
    <SectionBox id="skill-artifact" backgroundColor="gray">
      <SectionTitle>{productSection.title}</SectionTitle>
      <Typography variant="body">{productSection.body}</Typography>
      <Grid container justifyContent="center" spacing={2}>
        {products.map((product, ind) => (
          <CardGrid key={ind}>
            <ProductCard {...product} />
          </CardGrid>
        ))}
      </Grid>
    </SectionBox>
  );
};

export default SkillProduct;
