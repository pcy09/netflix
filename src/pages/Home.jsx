// api를 불러오기 위한 세팅
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import "./Home.scss";

export default function Home() {
	const dispatch = useDispatch();

	const { popularMovies, topRatedMovies, upcommingMovies, loading } =
		useSelector((state) => state.movie); //store에서 가져옴, loading상태도 추가

	useEffect(() => {
		dispatch(movieAction.getMovies());
	}, []);

	// 로딩 true - 데이타 도착 전 -> 로딩스피너 보여줌
	// 로딩 false - 데이타 도착 후, 에러 -> 데이타 보여줌, 에러메세지
	if (loading) {
		return (
			<div className="loader-container">
				<ClipLoader color="white" loading={loading} size={150} />
			</div>
		);
	}
	return (
		<div className="homeContainer">
			{popularMovies.results && <Banner movie={popularMovies.results[0]} />}
			<div className="slide-container">
				<h2>인기작 TOP 20</h2>
				<MovieSlide movie={popularMovies.results} />
				<h2>개봉 예정 영화 TOP 20</h2>
				<MovieSlide movie={upcommingMovies.results} />
				<h2>평점 높은 영화 TOP 20</h2>
				<MovieSlide movie={topRatedMovies.results} />
			</div>
		</div>
	);
}

// 조건부 렌더링을 걸지 않으면 데이타를 받아 오기 전엔 에러라고 표시됨
