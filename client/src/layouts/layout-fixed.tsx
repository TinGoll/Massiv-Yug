import React from "react";
import { Header } from "../features/header";
import ScrollToTop from "../components/scroll-to-top";

const LayoutFixed: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header sticky/>
      {children}
    </>
  );
};

export default LayoutFixed;

interface Props {
  children?: React.ReactNode;
}
