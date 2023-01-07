import MobileHeader from "../MobileHeader/MobileHeader";
import TabletHeader from "../organisms/TabletHeader";

export default function Header({ children }) {
  return (
    <>
      <TabletHeader />
      <MobileHeader />
      {/* <main className="main">{children}</main> */}
    </>
  );
}
