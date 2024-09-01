import PartnerBanner from "./PartnerBanner";
import styles from "./PartnersBanners.module.scss";

export default () => (
  <div className={styles.partnersBanners}>
    <PartnerBanner
      title="Parceiros"
      description="Lorem ipsum dolor sit amet, consectetur"
      callToAction="Confira"
    />

    <PartnerBanner
      title="Parceiros"
      description="Lorem ipsum dolor sit amet, consectetur"
      callToAction="Confira"
    />
  </div>
);
