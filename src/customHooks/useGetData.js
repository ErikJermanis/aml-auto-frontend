import { useEffect, useState } from "react";
import axios from "axios";

export const useGetData = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await axios.get(`${process.env.REACT_APP_API_DOMAIN}${url}`);
        setData(result.data);
      } catch(error) {
        console.log(error);
        setError('Oops! Something went wrong.');
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};