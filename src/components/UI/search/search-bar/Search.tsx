import TextField from "@mui/material/TextField/TextField";
import { SearchProp } from "./Search.props";
import styles from "./Search.module.scss";
import { ChangeEvent } from "react";

export default function Search({ searchName, onSearch }: SearchProp) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.search_line}>
      <TextField
        id="outlined-basic"
        label="Search"
        value={searchName}
        onChange={handleInputChange}
        variant="outlined"
        className={styles.search_field}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            "& fieldset": {
              borderColor: "lightgray",
            },
            "&.Mui-focused fieldset": {
              borderColor: "lightgray",
            },
            "&:hover fieldset": {
              borderColor: "lightgray",
            },
          },
          "& .MuiInputLabel-root": {
            color: "gray",
            "&.Mui-focused": {
              color: "#555555",
            },
          },

          "& .MuiInputBase-input": {
            color: "White",
          },
        }}
      />
    </div>
  );
}
