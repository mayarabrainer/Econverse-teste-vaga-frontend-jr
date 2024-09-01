import HeaderNav from './HeaderNav';
import HeaderMenu from './HeaderMenu';
import HeaderInfo from './HeaderInfo';
import styles from './Header.module.scss';

export default () => (
  <div className={styles.header}>
    <HeaderInfo />
    <HeaderMenu />
    <HeaderNav />
  </div>
);
