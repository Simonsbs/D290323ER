import styles from "./Temp2.module.css";

function Temp2({ children }) {
  return (
    <>
      <div className={styles.tempClass}>{children}</div>
      <div className={styles.tempClass2}>{children}</div>
    </>
  );
}

export default Temp2;
