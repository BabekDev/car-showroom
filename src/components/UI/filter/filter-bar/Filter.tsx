import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import styles from "./Filter.module.scss";
import { FilterProps } from "./Filter.props";

export default function Filter({
  filterMark,
  setFilterMark,
  filterModel,
  setFilterModel,
  filterColor,
  setFilterColor,
}: FilterProps) {
  return (
    <div className={styles.filter_line}>
      <FormControl fullWidth className={styles.form}>
        <InputLabel id="mark-select-label" sx={{ color: "white" }}>
          Mark
        </InputLabel>
        <Select
          labelId="mark-select-label"
          id="mark-select"
          value={filterMark || ""}
          onChange={(event) => setFilterMark(event.target.value)}
          label="Mark"
          sx={{
            width: "100%",
            bgcolor: "#252525",
            color: "white",
            "& .MuiSelect-select": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#252525",
              },
              "&:hover fieldset": {
                borderColor: "#252525",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#252525",
                color: "white",
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    bgcolor: "#333333",
                  },
                },
              },
            },
          }}
        >
          <MenuItem value="Lanos">Lanos</MenuItem>
          <MenuItem value="Opel">Opel</MenuItem>
          <MenuItem value="Tesla">Tesla</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={styles.form}>
        <InputLabel id="model-select-label" sx={{ color: "white" }}>
          Model
        </InputLabel>
        <Select
          labelId="model-select-label"
          id="model-select"
          value={filterModel || ""}
          onChange={(event) => setFilterModel(event.target.value)}
          label="Model"
          sx={{
            width: "100%",
            bgcolor: "#252525",
            color: "white",
            "& .MuiSelect-select": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#252525",
              },
              "&:hover fieldset": {
                borderColor: "#252525",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#252525",
                color: "white",
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    bgcolor: "#333333",
                  },
                },
              },
            },
          }}
        >
          <MenuItem value="Corolla">Corolla</MenuItem>
          <MenuItem value="Astra">Astra</MenuItem>
          <MenuItem value="Model X">Model X</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={styles.form}>
        <InputLabel id="color-select-label" sx={{ color: "white" }}>
          Color
        </InputLabel>
        <Select
          labelId="color-select-label"
          id="color-select"
          value={filterColor || ""}
          onChange={(event) => setFilterColor(event.target.value)}
          label="Color"
          sx={{
            width: "100%",
            bgcolor: "#252525",
            color: "white",
            "& .MuiSelect-select": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#252525",
              },
              "&:hover fieldset": {
                borderColor: "#252525",
              },
              "&.Mui-focused fieldset": {
                borderColor: "gray",
              },
            },
            "& .MuiInputLabel-root": {
              color: "white",
              "&.Mui-focused": {
                color: "white",
              },
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#252525",
                color: "white",
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    bgcolor: "#333333",
                  },
                },
              },
            },
          }}
        >
          <MenuItem value="Red">Red</MenuItem>
          <MenuItem value="White">White</MenuItem>
          <MenuItem value="Black">Black</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
