import { useState, useEffect } from "react";

export function useFetch(url) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(url);
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

    getData();
  }, [url]);

  return { fetchedData, isLoading, error };
}
