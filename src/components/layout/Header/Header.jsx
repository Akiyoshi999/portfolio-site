import MobileHeader from "../../MobileHeader/MobileHeader";
import TabletHeader from "../../TabletHeader/TabletHeader";

export default function Header({ children }) {
  return (
    <>
      <TabletHeader />
      <MobileHeader />
      {/* <main className="main">{children}</main> */}
    </>
  );
}
