import MobileSubMenuItem from "../../atoms/MobileSubMenuItem";

const MobileSubMenuItems = ({ subContents, handleScroll }) => {
  return (
    <>
      {subContents.map((item) => (
        <MobileSubMenuItem
          handleScroll={handleScroll}
          key={item.subContent}
          {...item}
        />
      ))}
    </>
  );
};

export default MobileSubMenuItems;
