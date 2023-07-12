import styles from "./Temp3.module.css";

function Temp3({ children }) {
  return (
    <>
      <div className={styles.tempClass}>{children}</div>
      <div className="fromGlobal">From global css</div>
    </>
  );
}

export default Temp3;
