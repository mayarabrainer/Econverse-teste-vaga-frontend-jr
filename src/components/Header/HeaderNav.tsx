import styles from './Header.module.scss';

export default () => (
  <div className={styles.headerNav}>
    <p>TODAS CATEGORIAS</p>
    <p>LANÇAMENTOS</p>
    <p>SUPERMERCADOS</p>
    <p>LIVROS</p>
    <p>MODA</p>
    <p>OFERTAS DO DIA</p>
    <div className={styles.headerNavInfo}>
      <img src="./assets/CrownSimple.png" alt="Ícone de uma coroa" />
      <p>ASSINATURA</p>
    </div>
  </div>
);
