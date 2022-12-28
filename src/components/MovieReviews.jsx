import React from "react";
import { Container } from "react-bootstrap";
import moment from "moment";
import StarRatings from "react-star-ratings";
import "./MovieReviews.scss";

export default function MovieReviews({ item }) {
	let reviews = item.results?.slice(0).reverse();

	return (
		<Container>
			<div className="reviewWrap">
				{reviews?.map((item) => (
					<div key={item.id} className="reviews">
						<StarRatings
							rating={item.author_details.rating / 2}
							caption="Small"
							starRatedColor="yellow"
							starDimension="15px"
							starSpacing="0px"
						/>
						<div className="contentWrap">{item.content}</div>
						<div className="authorWrap">
							<h4>{item.author}</h4>
							<p>{moment(item.created_at).format("YYYY-MM-DD HH:mm")}</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
