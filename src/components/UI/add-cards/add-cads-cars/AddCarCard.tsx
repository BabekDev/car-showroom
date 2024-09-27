import Button from "@mui/material/Button/Button"
import styles from "./AddCarCard.module.scss"

export default function AddCarCard({}) {
    return (
        <div className={styles.add_card_body}>
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
        Add
      </Button>
        </div>
    )
}