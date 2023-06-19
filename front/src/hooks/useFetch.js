import useSWR from "swr";

async function fetcher(url) {
  const BASE_URL =
    process.env.ENV === "production"
      ? process.env.REACT_APP_BASE_API_URL_PROD
      : process.env.REACT_APP_BASE_API_URL_DEV;

  const res = await fetch(`${BASE_URL}/${url}`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useFetch;
