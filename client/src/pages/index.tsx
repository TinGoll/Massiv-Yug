import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Button, Typography } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      Главная
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
