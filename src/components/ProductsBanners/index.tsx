import ProductBanner from "./ProductBanner";
import styles from "./ProductsBanners.module.scss";

export default () => (
  <div className={styles.productsBanners}>
    <ProductBanner
      title="Produtos"
      description="Lorem ipsum dolor sit amet, consectetur"
      callToAction="Confira"
    />

    <ProductBanner
      title="Produtos"
      description="Lorem ipsum dolor sit amet, consectetur"
      callToAction="Confira"
    />
  </div>
);
