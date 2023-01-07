import { Button as MuiButton, experimental_sx, styled } from "@mui/material";
import TabletSubMenuItems from "../../molecules/TabletSubMenu";
import { useTabletNavMenu } from "./logic";

const Button = styled(MuiButton)(
  experimental_sx({
    color: "black",
    "&:hover": {
      color: "white",
    },
  })
);

const TabletNavMenu = ({ route, subContents = [], icon, content }) => {
  const { handleOpen, action } = useTabletNavMenu();

  return (
    <>
      <Button
        href={route}
        onClick={subContents.length ? handleOpen : () => {}}
        startIcon={icon}
      >
        {content}
      </Button>
      {subContents ? (
        <TabletSubMenuItems {...action} subContents={subContents} />
      ) : (
        ""
      )}
    </>
  );
};

export default TabletNavMenu;
