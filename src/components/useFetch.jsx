import { useState, useEffect } from "react";

export function useFetch(url, query) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`${url}${query}`);
        if (!res.ok) throw new Error("Something went wrong with fetching data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setFetchedData(data);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setFetchedData([]);
      setError("");
      return;
    }

    getData();
  }, [url, query]);

  return { fetchedData, isLoading, error };
}
