import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieExplain from "../components/MovieExplain";
import { movieAction } from "../redux/action/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import MovieSlide from "../components/MovieSlide";
import MovieReviews from "../components/MovieReviews";

export default function MovieDetail() {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { detailMovies, trailerVideo, similarMovies, movieReviews, loading } =
		useSelector((state) => state.movie);

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
			<div className="slide-container">
				<h2>비슷한 영화</h2>
				<MovieSlide movie={similarMovies?.results} />
				<h2>리뷰 {movieReviews && movieReviews.results?.length}건</h2>
				{movieReviews && movieReviews.results?.length === 0 ? (
					<p className="noReview">관련 리뷰가 없습니다</p>
				) : (
					<MovieReviews item={movieReviews} />
				)}
			</div>
		</div>
	);
}
