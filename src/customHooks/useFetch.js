import { useEffect, useState } from "react";

export default function useFetch(url, headers=null) {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(url, {
        headers: headers
      })
      .then(response => {
          if(!response.ok) {
              throw new Error(`An error has occured, server returned ${response.status}`)
          }
          return response.json()
      })
      .then(data => {
        if(data.length === 0) {
          throw new Error('Error: empty array returned, no data')
        }
        setFetchedData(data)
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, []);

  return {fetchedData, loading, error};
}
