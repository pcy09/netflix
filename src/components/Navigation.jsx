import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
	const [index, setIndex] = useState("");
	const menuList = [
		{
			id: 0,
			title: "Home",
			link: "/",
			state: "",
		},
		{
			id: 1,
			title: "popular",
			link: "/category/popularMovies",
			state: "인기 영화",
		},
		{
			id: 2,
			title: "upcomming",
			link: "/category/upcomingMovies",
			state: "개봉 예정 영화",
		},
		{
			id: 3,
			title: "topRated",
			link: "/category/topRatedMovies",
			state: "높은 평점 영화",
		},
	];
	return (
		<Navbar className="navTop" bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand>
					<Link to="/" onClick={() => setIndex("")}>
						<img width={90} src="/logo01.png" alt="logo" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className=" me-auto my-2 my-lg-0" navbarScroll>
						{menuList.map((item) => (
							<NavLink
								to={item.link}
								key={item.id}
								className={index === item.title ? "navItem active" : "navItem"}
								onClick={() => {
									setIndex(item.title);
								}}
								state={item.state}
							>
								{item.title}
							</NavLink>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
