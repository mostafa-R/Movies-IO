import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [discoverMovies, setDiscoverMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movie, setMovie] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://api.themoviedb.org/3";

  // UseMemo to fix API_HEADERS redefinition issue
  const API_HEADERS = useMemo(
    () => ({
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTczM2E5MGI1NmIxNGM3NGMwMDJiODJmOGY1MzYyZSIsIm5iZiI6MTczNjIxOTI2NS40MjEsInN1YiI6IjY3N2M5YTgxMTVjYWZlOGFhZDc0YTQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TKSE3Ew_t3ZGnVbgZ3VoDm3od8D993Kh6M3mLaAX6Xo",
    }),
    []
  );

  const fetchMovies = useCallback(
    async (url, setter) => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(url, { headers: API_HEADERS });
        setter(res.data.results || []);
        setPageCount(res.data.total_pages || 0);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(`Error fetching movies: ${err.message}`);
      } finally {
        setLoading(false);
      }
    },
    [API_HEADERS]
  );

  const fetchMoviesByCategory = useCallback(
    (category) => {
      let url;
      switch (category) {
        case "On TV":
          url = `${API_URL}/tv/on_the_air?language=en-EG`;
          break;
        case "For Rent":
          url = `${API_URL}/movie/now_playing?language=en-EG`;
          break;
        case "In Theaters":
          url = `${API_URL}/movie/upcoming?language=en-EG`;
          break;
        default:
          url = `${API_URL}/movie/popular?language=en-EG`;
      }
      fetchMovies(url, setMovies);
    },
    [API_URL, fetchMovies]
  );

  const getTrendingMovies = useCallback(() => {
    fetchMovies(`${API_URL}/trending/all/day?language=en-US`, setTopRated);
  }, [API_URL, fetchMovies]);

  const fetchDiscoverMovies = useCallback(() => {
    fetchMovies(
      `${API_URL}/movie/now_playing?language=en-US&page=1`,
      setDiscoverMovies
    );
  }, [API_URL, fetchMovies]);

  const getPopularMovies = useCallback(() => {
    fetchMovies(`${API_URL}/movie/popular?language=en-US`, setMovies);
  }, [API_URL, fetchMovies]);

  const searchMovies = useCallback(
    (query) => {
      if (!query) {
        getPopularMovies();
        return;
      }
      fetchMovies(
        `${API_URL}/search/movie?include_adult=false&language=en-US&query=${query}`,
        setMovies
      );
    },
    [API_URL, fetchMovies, getPopularMovies]
  );

  const getMovieDetails = useCallback(
    async (id) => {
      setLoading(true);
      setError(null);
      try {
        let response;
        try {
          response = await axios.get(`${API_URL}/movie/${id}?language=en-US`, {
            headers: API_HEADERS,
          });
        } catch (movieErr) {
          console.log("Failed to fetch movie details, trying TV show...");
          try {
            response = await axios.get(`${API_URL}/tv/${id}?language=en-US`, {
              headers: API_HEADERS,
            });
          } catch (tvErr) {
            throw new Error(
              "Failed to fetch details for both movie and TV show."
            );
          }
        }
        setMovie(response.data);
      } catch (err) {
        console.error("Error fetching details:", err);
        setError(`Error: ${err.message}`);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    },
    [API_URL, API_HEADERS]
  );

  const getPage = useCallback(
    async (page) => {
      const res = await axios.get(
        `${API_URL}/movie/popular?language=en-US&page=${page}`,
        {
          headers: API_HEADERS,
        }
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    },
    [API_URL, API_HEADERS]
  );

  useEffect(() => {
    fetchDiscoverMovies();
    getPopularMovies();
    getTrendingMovies();
  }, [fetchDiscoverMovies, getPopularMovies, getTrendingMovies]);

  return (
    <DataContext.Provider
      value={{
        movies,
        discoverMovies,
        topRated,
        movie,
        pageCount,
        loading,
        error,
        searchMovies,
        getMovieDetails,
        fetchMoviesByCategory,
        getPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
