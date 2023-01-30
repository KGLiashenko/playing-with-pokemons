const Pagination: React.FC<{
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  nextPage: () => void;
  previousPage: () => void;
}> = ({ isPreviousDisabled, isNextDisabled, nextPage, previousPage }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-lg justify-content-center p-3">
        <li
          onClick={previousPage}
          className={`page-item page-link ${isPreviousDisabled && "disabled"}`}
        >
          Prev
        </li>
        <li
          onClick={nextPage}
          className={`page-item page-link ${isNextDisabled && "disabled"}`}
        >
          Next
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
