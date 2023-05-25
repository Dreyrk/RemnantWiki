import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(`${process.env.REACT_APP_BASE_API_URL_DEV}/${url}`);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export function useFetch(url) {
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  return {
    data: data && data.data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useFetch;
