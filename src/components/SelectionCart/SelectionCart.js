import React from "react";
import "./SelectionCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faTrash } from "@fortawesome/free-solid-svg-icons";

const SelectionCart = (props) => {
	const cart = props.cart;
	const totalBudget = cart.reduce((total, pd) => total + pd.salary, 0);

	return (
		<div className="selection-cart">
			<h1 className="cart-title">Selection Cart</h1>
			<h2 className="cart-length">
				<FontAwesomeIcon icon={faCartArrowDown} className="cart-icon" />{" "}
				<sup className="cart-sup">{cart.length}</sup>
			</h2>

			<ol className="player-ul">
				{cart.map((player) => (
					<li key={player.id}>
						<b>{player.name}</b> :
						<span className="float-right pr-5">$ {player.salary}</span>
						<span>
							<FontAwesomeIcon
								icon={faTrash}
								onClick={() => props.handleRemovePlayer(player)}
								className="delete-icon"
							/>
						</span>
					</li>
				))}
			</ol>

			<h5 className="total-budget">
				Total Budget :<span className="float-right">$ {totalBudget}</span>
			</h5>
		</div>
	);
};

export default SelectionCart;
