import React from "react";
import { Badge } from "react-bootstrap";
import Trailer from "./Trailer";

export default function MovieExplain({ item, videoId }) {
	return (
		<div
			className="detail-container"
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/original${item.backdrop_path})`,
			}}
		>
			<div className="detail-comment-container">
				<div className="detail-comment">
					<div>
						{item.genres?.map((item) => (
							<Badge ket={item.id} bg="danger">
								{item.name}
							</Badge>
						))}
					</div>
					<h1>{item.title}</h1>
					<p>{item.tagline}</p>
					<div className="spanWrap">
						<span className="star">⭐{item.vote_average}</span>
						<span>👥{item.popularity}</span>
						<span className={item.ault ? "r-rated" : "g-rated"}>
							{item.adult ? "R-rated" : ""}
						</span>
					</div>
					<div className="detail-overview">{item.overview}</div>
					<div>
						<Trailer videoId={videoId} />
					</div>
				</div>
			</div>
		</div>
	);
}
