import TextField from "@mui/material/TextField/TextField";
import { SearchProp } from "./Search.props";
import styles from "./Search.module.scss";
import Button from "@mui/material/Button/Button";

export default function Search({ searchName }: SearchProp) {
  return (
    <div className={styles.search_line}>
      <TextField
        id="outlined-basic"
        label="Search"
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
      <Button
        variant="outlined"
        sx={{
          color: "white",
          borderColor: "lightgray",
          borderRadius: "14px",
          padding: "14px",
          border: "0px",
          
          "&:hover": {
            borderColor: "lightgray",
            backgroundColor: '#2d2e2e'
          },
          "&:focused": {
            borderColor: "lightgray",
          },
          "&:active": {
            borderColor: "white",
          },
        }}
        className={styles.btn}
      >
        Search
      </Button>
      <h3>{searchName}</h3>
    </div>
  );
}
