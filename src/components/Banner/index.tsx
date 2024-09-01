import styles from './Banner.module.scss';

export default () => (
  <div className={styles.banner}>
    <div className={styles.imageCenterInfo}>
      <p>
        Venha conhecer nossas <br />
        promoções <br /> 50% Off nos produtos{" "}
      </p>
      <button>Ver produto</button>
    </div>
  </div>
);
