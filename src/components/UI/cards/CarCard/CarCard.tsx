import styles from "./CarCard.module.scss";
import { CarCardProps } from "./CarCard.props";

export default function CarCard({ mark, model, color, type }: CarCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <h3>{mark}</h3>
        <span>{model}</span>
        
      </div>

      {/* <img></img> */}
    </div>
  );
}
