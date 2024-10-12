import css from "./Message.module.css";
import clsx from "clsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Message({ message, type }) {
  return (
    <Box
      className={clsx(css.container, type === "error" ? css.error : css.normal)}
    >
      <Typography className={clsx(css.text)}>
        {message || "An error has occurred."}
      </Typography>
    </Box>
  );
}