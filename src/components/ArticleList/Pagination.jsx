import { useState } from "react";
import "../../styles/Forms.css";

export function Pagination({ setListPagination, listPagination, totalCount }) {
  const [pageInput, setPageInput] = useState("1");
  const limitValues = [5, 10, 20, 40];

  function handleLimitUpdate(event) {
    setListPagination((currPages) => ({
      ...currPages,
      limit: Number(event.target.value),
    }));
  }

  function handlePageUpdate(event) {
    setPageInput(event.target.value);
  }

  function incrementPage(number) {
    setListPagination(({ limit }) => ({
      limit,
      p: Number(pageInput) + number,
    }));
    setPageInput((currInput) => Number(currInput) + number);
  }

  function handleSubmit() {
    setListPagination(({ limit }) => ({ limit, p: Number(pageInput) }));
  }

  const minArticleIndex = listPagination.limit
    ? Math.max(listPagination.limit * (listPagination.p - 1) + 1, 1)
    : 1;
  const maxArticleIndex = listPagination.limit
    ? Math.min(listPagination.limit * listPagination.p, totalCount)
    : totalCount;

  const recapMessageFn = () => {
    if (totalCount === 0) return "Haven't found articles yet";
    if (minArticleIndex > totalCount)
      return "With great page\ncomes great responsibility";
    if (listPagination.p < 1) return "You should be more positive :(";
    return `Seeing ${minArticleIndex} to ${maxArticleIndex} of ${totalCount} results`;
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="pagination-container"
        id="pagination"
      >
        <label htmlFor="limit" className="pagination-label">
          Articles per page:{" "}
        </label>
        <select
          id="limit"
          value={listPagination.limit}
          onChange={handleLimitUpdate}
          className="pagination-limit"
        >
          {limitValues.map((value) => (
            <option key={value}>{value}</option>
          ))}
          <option value="0">All</option>
        </select>
        <section className="page-section">
          <button
            type="button"
            className={
              "pagination-button " +
              (listPagination.p > 1 ? "" : "button-disabled")
            }
            onClick={() => {
              if (listPagination.p > 1) incrementPage(-1);
            }}
          >
            Previous
          </button>
          <label htmlFor="page" className="pagination-label">
            Page:
          </label>
          <input
            type="number"
            id="page"
            onChange={handlePageUpdate}
            value={listPagination.limit ? pageInput : 1}
            onBlur={(event) => {
              if (Number(pageInput) !== listPagination.p) {
                handleSubmit(event);
              }
            }}
            className="pagination-page_num"
          ></input>
          <button
            type="button"
            className={
              "pagination-button " +
              (totalCount > maxArticleIndex ? "" : "button-disabled")
            }
            onClick={() => {
              if (totalCount > maxArticleIndex) incrementPage(1);
            }}
          >
            Next
          </button>
        </section>
        <p className="pagination-recap">{recapMessageFn()}</p>
      </form>
    </>
  );
}
