import styles from "./PartnersBanners.module.scss";

interface PartnerBannerProps {
  title: string;
  description: string;
  callToAction: string;
}

export default ({ title, description, callToAction }: PartnerBannerProps) => (
  <div className={styles.partnerBanner}>
    <h3>{title}</h3>
    <p>{description}</p>
    <button>{callToAction}</button>
  </div>
);
