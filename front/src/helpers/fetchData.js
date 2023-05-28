async function fetchData(url, options = { method: "GET" }) {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_API_URL_DEV}/${url}`,
    options
  );

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error("fetch failed");
  }
}

export default fetchData;
