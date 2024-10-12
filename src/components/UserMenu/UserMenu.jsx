import React from "react";
import { Button, Box, Typography } from "@mui/material";
import css from "./UserMenu.module.css";
import { selectToken, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <Box className={css.container}>
      <Typography variant="h6" className={css.greeting}>
        Howdy, {user.name}!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onLogout}
        className={css.logoutButton}
      >
        Logout
      </Button>
    </Box>
  );
}






