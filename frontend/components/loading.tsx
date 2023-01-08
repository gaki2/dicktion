import styles from "../styles/loading.module.css";

export default function Loading() {
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.loadingio}>
        <div className={styles.ldio}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
