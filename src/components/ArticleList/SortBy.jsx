import { useEffect, useState } from "react";

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

  const [sortString, setSortString] = useState("sort_by:created_at,order:desc");

  useEffect(() => {
    const sortObj = Object.fromEntries(
      sortString.split(",").map((pair) => pair.split(":"))
    );
    setSortQueries(sortObj);
  }, [sortString]);

  function handleUpdate(event) {
    setSortString(event.target.value);
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
