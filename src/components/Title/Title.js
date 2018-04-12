import React from "react";
import "./Title.css";

const Title = props => (
	<div  className="test">
		<h1 className="title">{props.children}</h1>
		<p className="score">Score : 0</p>
	</div>
)
export default Title;
