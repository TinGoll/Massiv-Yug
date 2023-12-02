import React from "react";
import { ElevationScroll, Header } from "../features/header";
import ScrollToTop from "../components/scroll-to-top";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <ElevationScroll>
        <Header />
      </ElevationScroll>
      {children}
    </>
  );
};

export default Layout;
interface Props {
  children?: React.ReactNode;
}
