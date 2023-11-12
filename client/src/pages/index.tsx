import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Button, Typography } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Box
        sx={(theme) => ({
          background: {
            xs: "#476b35",
            md: "#b95135",
            lg: "#3893ac",
            laptop: "#e1bc39",
          },
          minHeight: "100vh",
        })}
      >
        <Button type="button" variant="contained" color="primary">
          Кнопка
        </Button>
        <Button type="button" variant="contained" color="secondary">
          Кнопка
        </Button>
        <Button type="button" variant="contained" color="info">
          Кнопка
        </Button>
        <Button type="button" variant="contained" color="error">
          Кнопка
        </Button>
        <Button type="button" variant="contained" color="inherit">
          Кнопка
        </Button>
        <Button type="button" variant="contained" color="success">
          Кнопка
        </Button>
        <Button type="button" variant="contained" color="warning">
          Кнопка
        </Button>
        <Box>
          <Typography variant="poster">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            perferendis possimus in! Sit rem dolore ducimus, officiis nostrum
            deleniti quaerat architecto. Repudiandae, fugiat facere. Pariatur
            adipisci ea a possimus sunt!{" "}
          </Typography>
        </Box>
      </Box>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
