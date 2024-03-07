import styles from './Card.module.css';

type CardProps = {
  nameValue: string;
  time: string;
}
export function Card({ nameValue, time }: CardProps) {

  return (
    <div className={styles.container}>
      <strong> {nameValue}</strong>
      <span>{time}</span>
    </div>
  )
}

