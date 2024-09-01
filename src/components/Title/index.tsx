import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  strikes?: boolean
  seeAll?: boolean;
}

export default ({ text, strikes = true, seeAll }: TitleProps) => (
  <>
    <div className={styles.title} data-strikes={strikes}>
      <p className={styles.title}>{text}</p>
    </div>
    {seeAll && (
      <p className={styles.seeAll}>
        <b>Ver todos</b>
      </p>
    )}
  </>
);
