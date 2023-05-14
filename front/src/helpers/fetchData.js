async function fetchData(url) {
  const res = await fetch(`${process.env.REACT_APP_BASE_API_URL_DEV}/${url}`);

  if (res.status === 200) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error("fetch failed");
  }
}

export default fetchData;
