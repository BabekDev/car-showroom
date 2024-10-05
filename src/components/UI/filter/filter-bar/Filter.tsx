import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import styles from "./Filter.module.scss";
import { FilterProps } from "./Filter.props";
import styled from "@emotion/styled";

const CustomSelect = styled(Select)`
  width: 100%;
  background-color: #252525;
  color: #c5c524;
  text-align: center;

  .MuiSelect-select {
    color: #c5c524;
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: #c5c524;
    }
    &:hover fieldset {
      border-color: #c5c524;
    }
    &.Mui-focused fieldset {
      border-color: #c5c524;
    }
    &:focus-visible fieldset {
      border-color: #c5c524;
    }
  }

  .MuiInputLabel-root {
    color: #c5c524;
    &.Mui-focused {
      color: #c5c524;
    }
  }

  .MuiSelect-icon {
    color: #c5c524;
  }
`;



const CustomMenuProps = {
  PaperProps: {
    sx: {
      backgroundColor: "#252525",
      color: "white",
      "& .MuiMenuItem-root": {
        "&:hover": {
          backgroundColor: "#333333",
        },
      },
    },
  },
};

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
        <InputLabel id="mark-select-label">Mark</InputLabel>
        <CustomSelect
          labelId="mark-select-label"
          id="mark-select"
          value={filterMark || ""}
          onChange={(event) => setFilterMark(event.target.value as string)}
          label="Mark"
          MenuProps={CustomMenuProps}
          
        >
          <MenuItem value="Lanos">Lanos</MenuItem>
          <MenuItem value="Opel">Opel</MenuItem>
          <MenuItem value="Tesla">Tesla</MenuItem>
        </CustomSelect>
      </FormControl>

      <FormControl fullWidth className={styles.form}>
        <InputLabel id="model-select-label">Model</InputLabel>
        <CustomSelect
          labelId="model-select-label"
          id="model-select"
          value={filterModel || ""}
          onChange={(event) => setFilterModel(event.target.value as string)}
          label="Model"
          MenuProps={CustomMenuProps}
        >
          <MenuItem value="Corolla">Corolla</MenuItem>
          <MenuItem value="Astra">Astra</MenuItem>
          <MenuItem value="Model X">Model X</MenuItem>
        </CustomSelect>
      </FormControl>

      <FormControl fullWidth className={styles.form}>
        <InputLabel id="color-select-label">Color</InputLabel>
        <CustomSelect
          labelId="color-select-label"
          id="color-select"
          value={filterColor || ""}
          onChange={(event) => setFilterColor(event.target.value as string)}
          label="Color"
          MenuProps={CustomMenuProps}
        >
          <MenuItem value="Red">Red</MenuItem>
          <MenuItem value="White">White</MenuItem>
          <MenuItem value="Blue">Blue</MenuItem>
          <MenuItem value="Green">Green</MenuItem>
          <MenuItem value="Yellow">Yellow</MenuItem>
          <MenuItem value="Purple">Purple</MenuItem>
          <MenuItem value="Black">Black</MenuItem>
          <MenuItem value="Gray">Gray</MenuItem>

        </CustomSelect>
      </FormControl>
    </div>
  );
}
