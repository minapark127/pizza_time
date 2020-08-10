import { useState, useEffect } from "react";
import { movieApi, tvApi } from "api";
import { useLocation, useParams, useHistory } from "react-router-dom";

function useDetail() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { push } = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [isMovie] = useState(pathname.includes("/movie/"));

  const updateResult = async () => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(parsedId);
        setResult(result);
      } else {
        const { data: result } = await tvApi.tvDetail(parsedId);
        setResult(result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateResult();
  }, []);

  return { isLoading, result, error };
}
export default useDetail;
