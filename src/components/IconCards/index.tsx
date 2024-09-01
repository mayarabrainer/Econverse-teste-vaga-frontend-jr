import IconCard from "./IconCard";
import styles from "./IconCards.module.scss";

export default () => (
  <div className={styles.iconCards}>
    <IconCard
      image="/assets/monitorar-tablet-e-smartohone 1.png"
      imageAlt="Ícone monitor"
      title="Tecnologia"
    />

    <IconCard
      image="/assets/supermercados 1.png"
      imageAlt="Ícone monitor"
      title="Supermercado"
    />

    <IconCard
      image="/assets/whiskey.png"
      imageAlt="Ícone monitor"
      title="Bebidas"
    />

    <IconCard
      image="/assets/ferramentas 1.png"
      imageAlt="Ícone monitor"
      title="Ferramentas"
    />

    <IconCard
      image="/assets/cuidados-de-saude 1.png"
      imageAlt="Ícone monitor"
      title="Saúde"
    />

    <IconCard
      image="/assets/corrida 1.png"
      imageAlt="Ícone monitor"
      title="Esportes e Fitness"
    />

    <IconCard
      image="/assets/moda 1.png"
      imageAlt="Ícone monitor"
      title="Moda"
    />
  </div>
);
