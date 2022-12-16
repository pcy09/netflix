// 미들웨어 부분
// https://developers.themoviedb.org/3/movies/get-popular-movies

import api from "../api";

const APIkey = process.env.REACT_APP_APIKEY;
// 받아온 키 값을 노출되지 않게 만든다 -> 루트에 .env 파일

// 미들웨어는 함수가 함수를 리턴
// 영화 데이터 가져오기
function getMovies() {
	return async (dispatch) => {
		try {
			dispatch({ type: "GET_MOVIE_REQUEST" });

			const popularMovieApi = await api.get(
				`/movie/popular?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const topRatedMovieApi = await api.get(
				`/movie/top_rated?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const upcommingMovieApi = await api.get(
				`/movie/upcoming?api_key=${APIkey}&language=ko-KR&page=1`,
			);
			const genreApi = await api.get(
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
			// console.log("upcommingMovie data는?", upcommingMovies);
			// console.log("genreList data는?", genreList);

			dispatch({
				type: "GET_MOVIE_SUCCESS",
				payload: {
					popularMovies: popularMovies.data,
					topRatedMovies: topRatedMovies.data,
					upcommingMovies: upcommingMovies.data,
					genreList: genreList.data.genres,
				}, //data필드만 보내줌. Axios는 받은 데이터를 data필드에 넣어서 줌
			});
		} catch (error) {
			//에러 핸들링
			dispatch({ type: "GET_MOVIE_FAIL" });
		}
	};
}

// 디테일 데이터 가져오기
function getDetailMovies(id) {
	return async (dispatch) => {
		try {
			dispatch({ type: "GET_D_MOVIE_REQUEST" });
			const detailMovieApi = await api.get(
				`/movie/${id}?api_key=${APIkey}&language=ko-KR`,
			);
			const trailerVideoApi = await api.get(
				`/movie/${id}/videos?api_key=${APIkey}&language=en-US`,
			);

			let [detailMovies, trailerVideo] = await Promise.all([
				detailMovieApi,
				trailerVideoApi,
			]);
			dispatch({
				type: "GET_D_MOVIE_SUCCESS",
				payload: {
					detailMovies: detailMovies.data,
					trailerVideo: trailerVideo.data,
				},
			});
		} catch {
			dispatch({ type: "GET_D_MOVIE_FAIL" });
		}
	};
}
export const movieAction = { getMovies, getDetailMovies };

/*
  API 호출하는 방법
  1.fetch
  2.ajax
  3.axios *많이 사용
*/
