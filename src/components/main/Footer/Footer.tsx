import styles from "./Footer.module.scss";

export default function FooterComponent() {
  return (
    <footer className={styles.footer_block}>
      <div className={styles.left_block}>
        <h5>Contacts:</h5>
        <div style={{ marginLeft: "5px" }}>
          <h5>car-showroom@gmail.com</h5>
        </div>
      </div>
      <div className={styles.right_block}>(с) 2022-2024</div>
    </footer>
  );
}
