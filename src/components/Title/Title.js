import React from "react";
import "./Title.css";

const Title = props => (
	<div  className="test">
		<h1 className="title">{props.children}</h1>
	</div>
)
export default Title;
