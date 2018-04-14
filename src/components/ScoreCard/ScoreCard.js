import React from "react";
import "./style.css";


const ScoreCard = props => 
	<div className = "score">Score : <span>{props.children}</span></div>;
	

export default ScoreCard;

