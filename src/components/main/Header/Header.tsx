import Button from "@mui/material/Button";
import styles from "./Header.module.scss";

export default function HeaderComponent() {
  return (
    <header className={styles.header_block}>
      <div className={styles.left_block}>
        <div className={styles.logo_block}>
          <img
            className={styles.logo}
            src={"/img/pngwing.com.png"}
            alt="Logo site"
          />
        </div>
      </div>
      <div className={styles.right_block}>
        <Button className={styles.log_in_btn} variant="outlined">
          Log In
        </Button>

        <Button className={styles.sign_in_btn} variant="contained">
          Sign In
        </Button>
      </div>
    </header>
  );
}
