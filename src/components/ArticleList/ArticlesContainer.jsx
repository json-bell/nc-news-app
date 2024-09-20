import { useState } from "react";
import { ArticleList } from "./ArticleList";
import { Pagination } from "./Pagination";
import { SortBy } from "./SortBy";
import { useSearchParams } from "react-router-dom";

export function ArticlesContainer({ topic }) {
  const [listPagination, setListPagination] = useState({ limit: 10, p: 1 });
  const [totalCount, setTotalCount] = useState(0);

  let [searchParams, setSearchParams] = useSearchParams();

  const [sortQueries, setSortQueries] = useState({
    sort_by: searchParams.sort_by || "created_at",
    order: searchParams.order || "desc",
  });

  return (
    <>
      <Pagination
        setListPagination={setListPagination}
        listPagination={listPagination}
        totalCount={totalCount}
      />
      <SortBy sortQueries={sortQueries} setSortQueries={setSortQueries} />
      <ArticleList
        listPagination={listPagination}
        sortQueries={sortQueries}
        setTotalCount={setTotalCount}
        topic={topic}
      />
    </>
  );
}
