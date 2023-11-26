import { ReactNode } from "react";

export interface TextCardItem {
  icon?: ReactNode;
  title?: string;
  number?: number;
  text?: string;
  button?: ReactNode;
  key: string;
}
