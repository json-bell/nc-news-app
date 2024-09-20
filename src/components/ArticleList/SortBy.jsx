import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function SortBy({ sortQueries, setSortQueries }) {
  const fields = [
    {
      name: "Date",
      col_name: "created_at",
      //   defaultOrder: "desc",
    },
    {
      name: "Votes",
      col_name: "votes",
      //   defaultOrder: "desc",
    },
    {
      name: "Comments",
      col_name: "comment_count",
      //   defaultOrder: "desc",
    },
  ];
  const orders = [
    { name: "descending", ref: "desc" },
    { name: "ascending", ref: "asc" },
  ];

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.sort_by, "params");
  const [sortString, setSortString] = useState(
    `sort_by:${searchParams.get("sort_by") || "created_at"},order:${
      searchParams.get("order") || "desc"
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
        <label>Sort: </label>
        <select id="sort_by" value={sortString} onChange={handleUpdate}>
          {fields.map((field) =>
            orders.map((order) => (
              <option
                key={field.col_name + order.ref}
                value={"sort_by:" + field.col_name + "," + "order:" + order.ref}
              >
                {field.name} (
                {order.ref === "asc" ? <> &uarr; Increasing </> : <> &darr; </>}
                )
              </option>
            ))
          )}
        </select>
      </form>
      <ul className="sort-list"></ul>
    </>
  );
}
