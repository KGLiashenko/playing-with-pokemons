import { offset } from "@popperjs/core";
import Link from "next/link";

const Pagination: React.FC<{
  pageIndex: number;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}> = ({ pageIndex, isPreviousDisabled, isNextDisabled }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-lg justify-content-center p-3">
        <li className={`page-item ${isPreviousDisabled && "disabled"}`}>
          <Link
            className="page-link"
            href={"/pagination/" + Math.max(pageIndex - 1, 0)}
          >
            Prev
          </Link>
        </li>
        <li className={`page-item ${isNextDisabled && "disabled"}`}>
          <Link className="page-link" href={`/pagination/${pageIndex + 1}`}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
