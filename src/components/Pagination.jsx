import { useState } from "react";
import "../styles/Forms.css";

export function Pagination({ setListPagination, listPagination }) {
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

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="pagination-container"
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
            className="pagination-button"
            onClick={() => incrementPage(-1)}
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
            value={pageInput}
            onBlur={handleSubmit}
            className="pagination-page_num"
          ></input>
          <button
            type="button"
            className="pagination-button"
            onClick={() => incrementPage(1)}
          >
            Next
          </button>
        </section>
      </form>
    </>
  );
}
