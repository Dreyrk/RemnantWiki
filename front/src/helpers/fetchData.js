async function fetchData(url, options = { method: "GET" }) {
  const BASE_URL =
    process.env.REACT_APP_BASE_API_URL_DEV ||
    process.env.REACT_APP_BASE_API_URL_PROD;

  const res = await fetch(`${BASE_URL}/${url}`, options);

  if (res.ok) {
    const data = await res.json();
    return { data: data, status: res.status };
  } else {
    throw new Error("fetch failed");
  }
}

export default fetchData;
