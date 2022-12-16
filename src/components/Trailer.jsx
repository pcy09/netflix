//react-bootstrap modal을 이용한 유튜브 팝업

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";

export default function Trailer({ videoId }) {
	const [show, setShow] = useState(false);
	const onPlayerReady = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};
	const opts = {
		width: "640",
		height: "390",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
		},
	};
	return (
		<>
			<p
				className="trailer-btn"
				variant="primary"
				onClick={() => setShow(true)}
			>
				▶️Watch Trailer
			</p>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
				id="trailer"
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<YouTube
						videoId={videoId.results[0].key}
						opts={opts}
						onReady={onPlayerReady}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
}
