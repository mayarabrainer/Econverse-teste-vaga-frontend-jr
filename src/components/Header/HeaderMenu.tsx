import styles from "./Header.module.scss";

export default () => (
  <div className={styles.center}>
    <div className={styles.headerLogo}>
      <img src="./assets/Group 404.png" alt="VTEX Logo" />
    </div>
    <div className={styles.headerSearch}>
      <input type="text" placeholder="O que você está procurando?" />
      <img src="./assets/MagnifyingGlass.png" alt="Lupa" />
    </div>
    <div className={styles.headerIcon}>
      <div className={styles.headerIconInfo}>
        <img src="./assets/Group.png" alt="" />
      </div>
      <div className={styles.headerIconInfo}>
        <img src="./assets/Heart.png" alt="" />
      </div>
      <div className={styles.headerIconInfo}>
        <img src="./assets/UserCircle.png" alt="" />
      </div>
      <div className={styles.headerIconInfo}>
        <img src="./assets/ShoppingCart.png" alt="" />
      </div>
    </div>
  </div>
);
