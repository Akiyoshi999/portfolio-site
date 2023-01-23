import { Button as MuiButton, experimental_sx, styled } from "@mui/material";
import { useTabletNavMenu } from "./logic";
import { Link as Scroll } from "react-scroll";
import TabletSubMenuItems from "../../molecules/TabletSubMenuItems";

const Button = styled(MuiButton)(
  experimental_sx({
    color: "black",
    "&:hover": {
      color: "white",
    },
  })
);

const TabletNavMenu = ({ elId, subContents = [], icon, content }) => {
  const { handleOpen, action } = useTabletNavMenu();
  const subContentFlg = subContents.length > 0;

  return (
    <>
      <Button
        onClick={subContents.length ? handleOpen : () => {}}
        startIcon={icon}
      >
        {subContentFlg ? (
          content
        ) : (
          <Scroll to={elId} smooth>
            {content}
          </Scroll>
        )}
      </Button>
      {subContentFlg ? (
        <TabletSubMenuItems {...action} subContents={subContents} />
      ) : (
        ""
      )}
    </>
  );
};

export default TabletNavMenu;
