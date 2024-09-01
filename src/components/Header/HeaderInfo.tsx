import styles from "./Header.module.scss";

export default () => (
  <div className={styles.headerInfo}>
    <div className={styles.headerInfoItem}>
      <img
        src="/assets/ShieldCheck.png"
        alt="Ícone escudo remete a segurança"
      />
      <p>
        Compra <b>100% Segura</b>
      </p>
    </div>

    <div className={styles.headerInfoItem}>
      <img src="/assets/Truck.png" alt="" />
      <p>
        <b>Frete grátis</b> acima de R$200
      </p>
    </div>

    <div className={styles.headerInfoItem}>
      <img src="/assets/CreditCard.png" alt="" />
      <p>
        <b>Parcele</b> suas compras
      </p>
    </div>
  </div>
);
