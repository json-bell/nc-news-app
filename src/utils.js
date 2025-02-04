// does this need a jest test? It's effectively just using a pre-written js function but exporting it, and then in some ways it is end-to-end tested in the front-end

export function convertDateLong(isoDate) {
  const dateObj = new Date(isoDate);
  const options = {
    dateStyle: "full",
    timeStyle: "long",
  };
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  return formatter.format(dateObj);
}

export function convertDateShort(isoDate) {
  const dateObj = new Date(isoDate);
  const options = {
    dateStyle: "medium",
  };
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  return formatter.format(dateObj);
}

export function includeSkipNavs(setSkipNavInfo, linkIds = ["end-nav"]) {
  const skipableContent = [
    { id: "end-nav", contentName: "End of Navigation" },
    { id: "content", contentName: "Content" },
    { id: "articles", contentName: "Articles" },
    { id: "article", contentName: "Article" },
    { id: "pagination", contentName: "Pagination" },
    { id: "comments", contentName: "Comments" },
  ];
  const skipInfo = linkIds.map(
    (goalId) =>
      skipableContent.find(({ id }) => id === goalId) || {
        id: "end-nav",
        contentName: "End of Navigation",
      }
  );
  setSkipNavInfo(skipInfo);
}

export function pulseMsg(msgString, setMsg, pulseDelay = 2000) {
  setMsg(msgString);
  setTimeout(() => {
    setMsg(null);
  }, pulseDelay);
}
