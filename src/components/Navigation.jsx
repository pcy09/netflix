import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<Navbar className="navTop" bg="dark" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand>
					<Link to="/">
						<img width={90} src="/logo01.png" alt="logo" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Link className="navItem" to="/">
							Home
						</Link>
						<Link className="navItem" to="/movies">
							Movies
						</Link>
						<Link className="navItem" to="#">
							New & Popular
						</Link>
						<Link className="navItem" to="#">
							My List
						</Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-danger">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
