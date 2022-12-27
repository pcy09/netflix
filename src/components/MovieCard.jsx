import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ item }) {
	// store에서 genreList 불러오기
	const { genreList } = useSelector((state) => state.movie);

	const navigate = useNavigate();

	// 카드 클릭시 디테일 페이지로 전환
	const gotoDetail = () => {
		navigate(`/movies/${item.id}`);
	};
	return (
		<div
			onClick={gotoDetail}
			className="movieCard"
			style={{
				backgroundImage: `url(
					https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}
				)`,
			}}
		>
			<div className="card-info">
				<div className="titleWrap">
					<h5>{item.title}</h5>
					<p>
						{item.genre_ids.map((id) => (
							<Badge bg="danger" key={id}>
								{genreList.find((item) => item.id === id)?.name}
							</Badge>
						))}
					</p>
				</div>
				<div className="spanWrap">
					<span className="star">⭐{item.vote_average}</span>
					<span className={item.adult ? "r-rated" : "g-rated"}>
						{item.adult ? "R-rated" : ""}
					</span>
				</div>
			</div>
		</div>
	);
}
