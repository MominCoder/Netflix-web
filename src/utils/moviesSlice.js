import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailer: null,
    selectedMovie: null,
    castDetails: null,
    similarMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    // addPopularMovies: (state, action) => {
    //   state.popularMovies = action.payload;
    // },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    addMovieCastDetails: (state, action) => {
      state.castDetails = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailer,
  addMovieData,
  addSelectedMovie,
  addMovieCastDetails,
  addSimilarMovies
} = moviesSlice.actions;

export default moviesSlice.reducer;
