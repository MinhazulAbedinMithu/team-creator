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

	const handleRemovePlayer = (player) => {
		const newCart = cart.filter((item) => item !== player);
		setCart(newCart);
	};

	return (
		<Row>
			<Col md={7}>
				{players.map((player) => (
					<Player
						player={player}
						key={player.id}
						handleAddPlayer={handleAddPlayer}
					></Player>
				))}
			</Col>
			<Col md={5}>
				<SelectionCart
					cart={cart}
					handleRemovePlayer={handleRemovePlayer}
				></SelectionCart>
			</Col>
		</Row>
	);
};

export default SelectionStage;
