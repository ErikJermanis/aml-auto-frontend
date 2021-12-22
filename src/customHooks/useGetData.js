import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";

export const useGetData = dbRef => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let result = await getDocs(dbRef);
        result = result.docs.map(each => ({ ...each.data(), id: each.id }));
        setData(result);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
};