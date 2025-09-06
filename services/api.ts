export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({
  query,
  getPopular = false,
}: {
  query?: string;
  getPopular?: boolean;
}) => {
  try {
    const endpoint = query
      ? `${TMDB_CONFIG.BASE_URL}/search/movie?sort_by=popularity.desc&query=${query}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const popularMoviesEndpoint = `${TMDB_CONFIG.BASE_URL}/discover/movie?vote_count.gte=500`;

    const response = await fetch(
      getPopular ? popularMoviesEndpoint : endpoint,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      // @ts-ignore
      throw new Error(
        `Failed to fetch movies: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
