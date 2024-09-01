import styles from "./IconCards.module.scss";

interface IconCardProps {
    image: string;
    imageAlt: string;
    title: string;
}

export default ({ image, imageAlt, title }: IconCardProps) => (
  <div className={styles.iconCard}>
    <div className={styles.iconTech}>
      <img
        src={image}
        alt={imageAlt}
      />
    </div>
    <p className={styles.iconTechInfo}>{title}</p>
  </div>
);
