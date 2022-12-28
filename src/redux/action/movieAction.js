// 미들웨어 부분 toolkit

import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const APIkey = "2a0f81f3d6a99b431fed0231ab67f88f";
// 받아온 키 값을 노출되지 않게 만든다 -> 루트에 .env 파일

// 미들웨어는 함수가 함수를 리턴
// 영화 데이터 가져오기
function getMovies() {
	return async (dispatch) => {
		try {
			dispatch(movieActions.getMoviesRequest());

			const popularMovieApi = api.get(
				`/movie/popular?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const topRatedMovieApi = api.get(
				`/movie/top_rated?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const upcommingMovieApi = api.get(
				`/movie/upcoming?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const genreApi = api.get(
				`/genre/movie/list?api_key=${APIkey}&language=ko-KR`,
			);
			// 3개 데이타를 병렬로 동시에.
			// let data = await Promise.all([popularMovieApi,topRatedMovieApi,upcommingMovieApi,]);
			// console.log("data는?", data);
			// 따로 받아옴
			let [popularMovies, topRatedMovies, upcommingMovies, genreList] =
				await Promise.all([
					popularMovieApi,
					topRatedMovieApi,
					upcommingMovieApi,
					genreApi,
				]);
			// console.log("popularMovie data는?", popularMovies);
			// console.log("topRatedMovie data는?", topRatedMovies);
			// console.log("upcommingMovie data는?", upcommingMovies.data);
			// console.log("genreList data는?", genreList);

			dispatch(
				movieActions.getMainMovies({
					popularMovies: popularMovies.data,
					topRatedMovies: topRatedMovies.data,
					upcommingMovies: upcommingMovies.data,
					genreList: genreList.data.genres,
				}), //data필드만 보내줌. Axios는 받은 데이터를 data필드에 넣어서 줌
			);
		} catch (error) {
			//에러 핸들링
			dispatch(movieActions.getMoviesFailure());
		}
	};
}

// 디테일 데이터 가져오기
function getMoviesDetail(id) {
	return async (dispatch) => {
		try {
			dispatch(movieActions.getMoviesRequest());

			const detailMovieApi = api.get(
				`/movie/${id}?api_key=${APIkey}&language=ko-KR`,
			);
			const trailerVideoApi = api.get(
				`/movie/${id}/videos?api_key=${APIkey}&language=en-US`,
			);
			const similarMovieApi = api.get(
				`/movie/${id}/similar?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const movieReviewApi = api.get(
				`/movie/${id}/reviews?api_key=${APIkey}&language=en-US&page=1`,
			);
			let [detailMovies, trailerVideo, similarMovies, movieReviews] =
				await Promise.all([
					detailMovieApi,
					trailerVideoApi,
					similarMovieApi,
					movieReviewApi,
				]);

			dispatch(
				movieActions.getDetailMovies({
					detailMovies: detailMovies.data,
					trailerVideo: trailerVideo.data,
					similarMovies: similarMovies.data,
					movieReviews: movieReviews.data,
				}),
			);
		} catch {
			dispatch(movieActions.getMoviesFailure());
		}
	};
}
export const movieAction = { getMovies, getMoviesDetail };

/*
  API 호출하는 방법
  1.fetch
  2.ajax
  3.axios *많이 사용
*/
