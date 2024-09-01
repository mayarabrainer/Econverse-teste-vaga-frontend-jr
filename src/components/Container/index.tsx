import { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export default ({ children }: ContainerProps) => (
  <div className={styles.container}>{children}</div>
);
