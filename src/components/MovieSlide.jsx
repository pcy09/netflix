import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import "./MovieSlide.scss";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1400 },
		items: 5,
		slidesToSlide: 5,
	},
	desktop: {
		breakpoint: { max: 1400, min: 1024 },
		items: 4,
		slidesToSlide: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
		slidesToSlide: 3,
	},
	mobile: {
		breakpoint: { max: 768, min: 0 },
		items: 2,
		slidesToSlide: 2,
	},
};

export default function MovieSlide({ movie }) {
	return (
		<div>
			<Carousel responsive={responsive}>
				{movie &&
					movie.map((item) => (
						<div className="cardWrap" key={item.id}>
							<MovieCard item={item} />
						</div>
					))}
			</Carousel>
		</div>
	);
}
