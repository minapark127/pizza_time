import { useState, useEffect } from "react";
import { trendingApi } from "api";

function useHome() {
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);

  const updateHome = async () => {
    try {
      const {
        data: { results: trending },
      } = await trendingApi.trendingAll();
      setTrending(trending);
    } catch (error) {
      setError("❌cannot find information on trending❌");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    updateHome();
  }, []);
  return { loading, trending, error };
}

export default useHome;
