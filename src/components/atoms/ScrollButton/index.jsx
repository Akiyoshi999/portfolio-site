import { styled } from "@mui/system";
import { Link } from "react-scroll";

const Scroll = styled(Link)({});

const ScrollButton = ({ ...props }) => (
  <Scroll offset={-64} smooth {...props}>
    {props.children}
  </Scroll>
);

export default ScrollButton;
