import styles from "./Footer.module.scss";

export default () => (
    <div className={styles.footer}>
        <div className={styles.footerInfoContainer}>
            <div className={styles.footerInfoDetail}>
                <img
                    src="../assets/institucional.png"
                    alt="Ícone escudo remete a segurança"
                />
            </div>

            <div className={styles.footerInfoDetail}>
                <img
                    src="../assets/infos_uteir.png"
                    alt="Ícone escudo remete a segurança"
                />
            </div>

            <div className={styles.footerInfoDetail}>
                <img
                    src="../assets/formas_pagto.png"
                    alt="Ícone escudo remete a segurança"
                />
            </div>

            <div className={styles.footerInfoDetail}>
                <img
                    src="../assets/news.png"
                    alt="Ícone escudo remete a segurança"
                />
            </div>

        </div>

        <div className={styles.footerInfoDetail}>
            <img
                src="../assets/base_inferior.png"
                alt="Ícone escudo remete a segurança"
            />
        </div>

    </div>

  );