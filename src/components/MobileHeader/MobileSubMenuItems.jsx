import React from "react";
import MobileNavSubMenuItem from "./MobileSubMenuItem";

const MobileSubMenuItems = ({ subContents }) => {
  return (
    <>
      {subContents.map((item) => (
        <MobileNavSubMenuItem key={item.subContent} {...item} />
      ))}
    </>
  );
};

export default MobileSubMenuItems;
