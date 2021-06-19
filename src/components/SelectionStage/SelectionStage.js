import React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import fakeData from "../../fakeData/index.json";
import Player from "../Player/Player";
import SelectionCart from "../SelectionCart/SelectionCart";
const SelectionStage = () => {
	const [players, setPlayers] = useState([]);
	useEffect(() => {
		setPlayers(fakeData);
	}, []);

	const [cart, setCart] = useState([]);

	const handleAddPlayer = (player) => {
		const newCart = [...cart, player];
		const uniqueCart = [...new Set(newCart)];
		setCart(uniqueCart);
	};
	return (
		<Row>
			<Col md={8}>
				{players.map((player) => (
					<Player
						player={player}
						key={player.id}
						handleAddPlayer={handleAddPlayer}
					></Player>
				))}
			</Col>
			<Col md={4}>
				<SelectionCart cart={cart}></SelectionCart>
			</Col>
		</Row>
	);
};

export default SelectionStage;
