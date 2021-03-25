import React from "react";
import PropTypes from "prop-types";
import { SecondsCounter } from "./SecondsCounter";

export function Home(props) {
	return (
		<div className="d-flex flex-row justify-content-center bg-dark">
			<div className=" p-2 bg-dark text-white m-1">
				<i className="far fa-clock fa-4x pt-2" />
			</div>
			<SecondsCounter number={props.firstDigit} />
			<SecondsCounter number={props.secondDigit} />
			<SecondsCounter number={props.thirdDigit} />
			<SecondsCounter number={props.fourthDigit} />
			<SecondsCounter number={props.fifthDigit} />
			<SecondsCounter number={props.sixthDigit} />
		</div>
	);
}

Home.propTypes = {
	firstDigit: PropTypes.number,
	secondDigit: PropTypes.number,
	thirdDigit: PropTypes.number,
	fourthDigit: PropTypes.number,
	fifthDigit: PropTypes.number,
	sixthDigit: PropTypes.number
};
