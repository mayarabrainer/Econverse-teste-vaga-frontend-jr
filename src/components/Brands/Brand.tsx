import styles from "./Brands.module.scss";

interface BrandPros {
  brandImage: string;
}

export default ({ brandImage }: BrandPros) => (
  <div className={styles.brand}>
    <img src={brandImage} alt="" />
  </div>
);
