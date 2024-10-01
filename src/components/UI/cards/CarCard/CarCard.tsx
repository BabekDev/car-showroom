import { CarType } from "../../../../types/car.type";
import styles from "./CarCard.module.scss";

export default function CarCard({ mark, url, model, color, price }: CarType) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <h3 className={styles.mark}>{mark}</h3>
        <img src={url} alt="Car Photo" className={styles.car_photo} />

        <div className={styles.footer}>
          <div className={styles.left_block}>
            <span className={styles.model}>Model: {model}</span>
            <span className={styles.color}>Color: {color}</span>
          </div>
          <div className={styles.right_block}>
            <span className={styles.price}>{price} NOK</span>
          </div>
        </div>
      </div>
    </div>
  );
}
