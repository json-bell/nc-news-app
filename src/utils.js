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
