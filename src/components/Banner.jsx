import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.scss";

export default function Banner({ movie }) {
	const navigate = useNavigate();

	// 카드 클릭시 디테일 페이지로 전환
	const gotoDetail = () => {
		navigate(`/movies/${movie.id}`);
	};
	return (
		<div
			onClick={gotoDetail}
			className="banner"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
			}}
		>
			<div className="banner-info">
				<h1>{movie.title}</h1>
				<p>{movie.overview}</p>
			</div>
		</div>
	);
}
