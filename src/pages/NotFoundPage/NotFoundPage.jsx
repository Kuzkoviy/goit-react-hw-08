import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <Box className={css.container}>
      <Box className={css.content}>
        <Typography variant="h1" className={css.title}>
          404
        </Typography>
        <Typography variant="h5" className={css.subtitle}>
          Page Not Found
        </Typography>
        <Typography variant="body1" className={css.description}>
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Box>
    </Box>
  );
}