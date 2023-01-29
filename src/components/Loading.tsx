import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
};

export default Loading;
