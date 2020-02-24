import React from "react";
import uuid from 'react-uuid'


const Cards = props => {

	const renderCards = () => {
		return props.data.map((card) => {
			return (
					<li key={uuid()}>{card.name} {card.age}</li>
				)
		})
	}

	return (

		<ul>

		{renderCards()}

		</ul>
		)


}


export { Cards }