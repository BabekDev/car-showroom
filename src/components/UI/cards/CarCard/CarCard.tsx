import styles from "./CarCard.module.scss";
import { CarCardProps } from "./CarCard.props";

export default function CarCard({ mark, url, model, color }: CarCardProps) {
  return (
    <div className={styles.card_container}>
    <div className={styles.card}>
      <div>
        <h3 className={styles.mark}>{mark}</h3>
        <img src={url} alt="Car Photo" className={styles.car_photo} />
        <span className={styles.model}>{model}</span>
        <span className={styles.color}>, {color}</span>
      </div>

    </div>
    </div>
  );
}
