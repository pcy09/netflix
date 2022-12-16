import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieExplain from "../components/MovieExplain";
import { movieAction } from "../redux/action/movieAction";
import ClipLoader from "react-spinners/ClipLoader";

export default function MovieDetail() {
	const { id } = useParams();
	const { detailMovies, trailerVideo, loading } = useSelector(
		(state) => state.movie,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(movieAction.getDetailMovies(id));
	}, []);

	if (loading) {
		return (
			<div className="loader-container">
				<ClipLoader color="white" loading={loading} size={150} />
			</div>
		);
	}
	return (
		<div>
			<MovieExplain item={detailMovies} videoId={trailerVideo} />
			<br />
			<br />
			<br />
			<h1>영화 리뷰들 넣을곳!</h1>
		</div>
	);
}
