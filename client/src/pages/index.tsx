import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Button } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return <main>

    <Button type="button" variant="contained" color="info" >Кнопка</Button>


  </main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
