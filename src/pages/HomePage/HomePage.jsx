import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <Container className={css.container}>
      <Paper className={css.paper}>
        <Typography variant="h1" className={css.title}>
          PhoneBook App
        </Typography>

      </Paper>
    </Container>
  );
}