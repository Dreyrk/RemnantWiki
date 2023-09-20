async function fetchData(url, options = { method: "GET" }) {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_API_URL_PROD
      : process.env.REACT_APP_BASE_API_URL_DEV;

  const res = await fetch(`${BASE_URL}/${url}`, options);

  if (res.ok) {
    const data = await res.json();
    if (url.includes("random")) {
      return data.data;
    } else {
      return { data: data.data, status: res.status };
    }
  } else {
    throw new Error("fetch failed");
  }
}

export default fetchData;
