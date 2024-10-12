import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import clsx from "clsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box className={clsx(css.container)}>
      <label htmlFor="search">Find contacts by name</label>
      <TextField
        id="search"
        name="search"
        variant="outlined"
        size="small"
        className={clsx(css.search)}
        onChange={handleSearch}
      />
    </Box>
  );
}