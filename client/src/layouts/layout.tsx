import React from "react";
import { ElevationScroll, Header } from "../features/header";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
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
