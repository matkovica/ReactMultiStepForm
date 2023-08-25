import { useEffect, useState } from "react";

const cache = {};

function useFetch(key, url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    if (cache[key]) {
      setData(cache[key]);
      return;
    }
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }
    getData();
  }, [key, url]);

  return { data, isLoading, isError };
}

export default useFetch;
