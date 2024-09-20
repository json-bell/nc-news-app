import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function SortBy({ sortQueries, setSortQueries }) {
  const fields = [
    {
      name: "Date",
      col_name: "created_at",
      desc_msg: "Newest first",
      asc_msg: "Oldest first",
    },
    {
      name: "Votes",
      col_name: "votes",
      desc_msg: "Most first",
      asc_msg: "Least first",
    },
    {
      name: "Comments",
      col_name: "comment_count",
      desc_msg: "Most first",
      asc_msg: "Least first",
    },
  ];
  const orders = [
    { name: "descending", ref: "desc" },
    { name: "ascending", ref: "asc" },
  ];

  let [searchParams, setSearchParams] = useSearchParams();
  const sortByInput = (
    searchParams.get("sort_by") || "created_at"
  ).toLowerCase();
  const orderInput = (searchParams.get("order") || "desc").toLowerCase();
  const validQueries =
    /^(created_at)|(votes)|(comment_count)$/.test(sortByInput) &&
    /^(asc)|(desc)$/;
  const [sortString, setSortString] = useState(
    `sort_by:${validQueries ? sortByInput : "created_at"},order:${
      validQueries ? orderInput : "desc"
    }`
  );

  useEffect(() => {}, [sortString]);

  function handleUpdate(event) {
    const newString = event.target.value;
    setSortString(newString);
    const sortObj = Object.fromEntries(
      newString.split(",").map((pair) => pair.split(":"))
    );
    setSortQueries(sortObj);
    setSearchParams((params) => ({
      ...params,
      ...sortObj,
    }));
  }

  return (
    <>
      <form>
        <label htmlFor="sort_by">Sort: </label>
        <select id="sort_by" value={sortString} onChange={handleUpdate}>
          {fields.map((field) =>
            orders.map((order) => (
              <option
                key={field.col_name + order.ref}
                value={"sort_by:" + field.col_name + "," + "order:" + order.ref}
              >
                {field.name} ({field[`${order.ref}_msg`]})
              </option>
            ))
          )}
        </select>
      </form>
      <ul className="sort-list"></ul>
    </>
  );
}
