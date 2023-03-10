// 리듀서 - 3개 API를 넘겨받음
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
	popularMovies: {},
	topRatedMovies: {},
	upcommingMovies: {},
	genreList: {},
	detailMovies: {},
	similarMovies: {},
	trailerVideo: {},
	loading: true,
	movieReviews: {},
};

// createSlice - 리듀서를 만들어줌, 객체를 매개변수로, 3개 필요
const movieSlice = createSlice({
	name: "movie", //액션 네임을 만들어줌
	initialState,
	reducers: {
		//기존에 if elseif, switch역할, 함수(2개의 매개변수를 받음)

		getMoviesRequest(state, action) {
			//로딩시작
			state.loading = true;
		},
		getMainMovies(state, action) {
			state.popularMovies = action.payload.popularMovies;
			state.topRatedMovies = action.payload.topRatedMovies;
			state.upcommingMovies = action.payload.upcommingMovies;
			state.genreList = action.payload.genreList;
			state.loading = false;
		},
		getMoviesFailure(state, action) {
			state.loading = true;
		},
		getDetailMovies(state, action) {
			state.detailMovies = action.payload.detailMovies;
			state.trailerVideo = action.payload.trailerVideo;
			state.similarMovies = action.payload.similarMovies;
			state.movieReviews = action.payload.movieReviews;
			state.loading = false;
		},
	},
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
