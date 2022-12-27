import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieExplain from "../components/MovieExplain";
import { movieAction } from "../redux/action/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import MovieSlide from "../components/MovieSlide";

export default function MovieDetail() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { detailMovies, trailerVideo, similarMovies, loading } = useSelector(
		(state) => state.movie,
	);

	useEffect(() => {
		dispatch(movieAction.getMoviesDetail(id));
	}, [id]);

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
			<MovieSlide movie={similarMovies?.results} />
		</div>
	);
}
