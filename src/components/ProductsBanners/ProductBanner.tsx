import styles from "./ProductsBanners.module.scss";

interface ProductBannerProps {
  title: string;
  description: string;
  callToAction: string;
}

export default ({ title, description, callToAction }: ProductBannerProps) => (
  <div className={styles.productBanner}>
    <h3>{title}</h3>
    <p>{description}</p>
    <button>{callToAction}</button>
  </div>
);
