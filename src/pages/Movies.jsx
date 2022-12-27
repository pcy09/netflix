// api를 불러오기 위한 세팅
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import MovieCard from "../components/MovieCard";
import ClipLoader from "react-spinners/ClipLoader";
import "./Movies.scss";
import { useLocation, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Movies() {
	let { id } = useParams();
	const location = useLocation();
	let movieTitle = location.state;
	const dispatch = useDispatch();

	const { popularMovies, topRatedMovies, upcommingMovies, loading } =
		useSelector((state) => state.movie); //store에서 가져옴, loading상태도 추가

	useEffect(() => {
		dispatch(movieAction.getMovies());
	}, []);

	// 로딩 true - 데이타 도착 전 -> 로딩스피너 보여줌
	// 로딩 false - 데이타 도착 후, 에러 -> 데이타 보여줌, 에러메세지

	let categoryItem = [];
	if (id === "popularMovies") {
		categoryItem = popularMovies.results;
	} else if (id === "upcomingMovies") {
		categoryItem = upcommingMovies.results;
	} else {
		categoryItem = topRatedMovies.results;
	}

	if (loading) {
		return (
			<div className="loader-container">
				<ClipLoader color="white" loading={loading} size={150} />
			</div>
		);
	}
	return (
		<Container className="categoryContainer">
			<h2>{movieTitle}</h2>
			<Row>
				{categoryItem &&
					categoryItem.map((item) => (
						<Col
							className="cardWrap"
							key={item.id}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							xxl={2}
						>
							<MovieCard item={item} />
						</Col>
					))}
			</Row>
		</Container>
	);
}

// 조건부 렌더링을 걸지 않으면 데이타를 받아 오기 전엔 에러라고 표시됨
