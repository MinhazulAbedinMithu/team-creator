import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
	const { name, country, img, role, salary } = props.player;
	return (
		<Row className="player">
			<Col md={4}>
				<div className="img">
					<img src={img} alt="Player" className="img-fluid w-100" />
				</div>
			</Col>
			<Col md={8}>
				<h1>{name}</h1>
				<p>
					<b>Country:</b> {country}
				</p>
				<p>
					<b>Role:</b> {role}
				</p>
				<p>
					<b>salary: </b> $ {salary}
				</p>
				<button
					onClick={() => props.handleAddPlayer(props.player)}
					className="btn btn-primary"
				>
					<FontAwesomeIcon icon={faUserPlus} />
					<span> Add Player</span>
				</button>
			</Col>
		</Row>
	);
};

export default Player;
