import styles from "./Pagination.module.css";

const Pagination: React.FC<{
  nextPage: () => void;
  previousPage: () => void;
}> = ({ nextPage, previousPage }) => {
  return (
    <div className={styles["pagination-container"]}>
      <ul className={styles.pagination}>
        <li onClick={previousPage} className={styles["page-index"]}>
          Prev
        </li>
        <li onClick={nextPage} className={styles["page-index"]}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
