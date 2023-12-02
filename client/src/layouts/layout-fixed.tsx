import React from "react";
import { Header } from "../features/header";

const LayoutFixed: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header sticky/>
      {children}
    </>
  );
};

export default LayoutFixed;

interface Props {
  children?: React.ReactNode;
}
