import React from "react";

export default function Banner({ movie }) {
	return (
		<div
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
