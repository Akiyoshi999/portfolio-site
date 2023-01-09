import MobileSubMenuItem from "../../atoms/MobileSubMenuItem";

const MobileSubMenuItems = ({ subContents }) => {
  return (
    <>
      {subContents.map((item) => (
        <MobileSubMenuItem key={item.subContent} {...item} />
      ))}
    </>
  );
};

export default MobileSubMenuItems;
