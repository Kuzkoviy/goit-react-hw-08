import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/auth/selectors";

import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

import css from "./AppBar.module.css";

export default function AppBar () {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <header className={css.appBar}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};