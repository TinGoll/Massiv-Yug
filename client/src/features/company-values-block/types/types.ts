import { ReactNode } from "react";

export interface TextCardItem {
  icon?: ReactNode;
  title?: string;
  text?: string;
  key: string;
}
