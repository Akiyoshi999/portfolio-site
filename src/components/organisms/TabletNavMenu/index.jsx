import { Button as MuiButton, styled } from "@mui/material";
import { useTabletNavMenu } from "./logic";
import TabletSubMenuItems from "../../molecules/TabletSubMenuItems";
import ScrollButton from "../../atoms/ScrollButton";

const Button = styled(MuiButton)(({ theme }) =>
  theme.unstable_sx({
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
          <ScrollButton to={elId}>{content}</ScrollButton>
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
