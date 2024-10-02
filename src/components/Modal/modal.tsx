import { ModalProps } from "./modal.props";
import styles from "./modal.module.scss";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";

export const Modal = ({ active, setActive }: ModalProps) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className={styles.modal_title}>ADD YOUR CAR</h1>

        <div className={styles.modal_body}>
          <div className={styles.left_side}>
            <h3>Mark: </h3>
            <h3>URL: </h3>
            <h3>Model: </h3>
            <h3>Price: </h3>
            <h3>Color: </h3>
          </div>
          <div className={styles.right_side}>
            <TextField
              variant="outlined"
              label={null}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />
            <TextField
              variant="outlined"
              label={null}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />
            <TextField
              variant="outlined"
              label={null}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              id="outlined-number"
              type="number"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                  "&::-webkit-inner-spin-button": {
                    display: "none",
                  },
                  "&::-webkit-outer-spin-button": {
                    display: "none",
                  },
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              variant="outlined"
              label={null}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "white",
                  },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />
          </div>
        </div>
        <Button
          sx={{
            margin: "20px",
            color: "white",
            backgroundColor: "#252525",
            fontSize: "20px",
            minHeight: "5px",
            height: "auto",
          }}
        >
          Add Car
        </Button>
      </div>
    </div>
  );
};
