import { useState } from "react";
import { ArticleList } from "./ArticleList";
import { Pagination } from "../Pagination";

export function ArticlesContainer() {
  const [listPagination, setListPagination] = useState({ limit: 10, p: 1 });
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
      <Pagination
        setListPagination={setListPagination}
        listPagination={listPagination}
        totalCount={totalCount}
      />
      <ArticleList
        listPagination={listPagination}
        setTotalCount={setTotalCount}
      />
    </>
  );
}
