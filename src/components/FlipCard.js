import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function FlipCard({
	title = "Card Title",
	body = "Card Body",
	backTitle = "Back Title",
	backBody = "Back Body",
	transition = 0.5,
	direction="Y",
	bgColor="black",
	zIndex = 0,
	height = 300,
	width = 300,
	frontQuote = false,
	backQuote = false,
}
) {	

	const [flipped, setFlipped] = useState(false);
	
	function flipOver(){
		setFlipped(!flipped);
	}

	function showFront(){
		setFlipped(true)
	}

	function showBack(){
		setFlipped(false)
	}

	function calcDegrees(flipped){
		return flipped ? 0 : 180;
	}

	return (
	<div style={{position:"relative", width: width, height: height, display: "flex", margin: "2rem"}}
		onMouseEnter={() => showFront()}
		onMouseLeave={() => showBack()}
	>
	  <Card 
		className="flex-center"
		style={{
			width:"100%", height:"100%", zIndex:zIndex,
			transition: transition + "s",
			backfaceVisibility: "hidden",
			position: "absolute",
			backgroundColor: bgColor,
			padding: "1rem",
			transform: `rotate${direction}(${calcDegrees(flipped)}deg)`}}
	  >
		{!backQuote && ( <>
			<Card.Title>{backTitle}</Card.Title>
			{backBody}
			</>
		)}
		{backQuote && (
			<blockquote class="blockquote" style={{fontSize: "1rem"}}>
				<p>“{backBody}”</p>
				<footer class="blockquote-footer text-center mt-1">{backTitle}</footer>
			</blockquote>
		)}
	  </Card>

	  <Card 
		className="flex-center"
		style={{
			width:"100%", height:"100%", zIndex:zIndex,
			transition: transition + "s",
			backfaceVisibility: "hidden",
			position: "absolute",
			backgroundColor: bgColor,
			padding: "1rem",
			transform: `rotate${direction}(${calcDegrees(!flipped)}deg)`}}
	  >
		{!frontQuote && ( <>
			<Card.Title>{title}</Card.Title>
			{body}
			</>
		)}
		{frontQuote && (
			<blockquote class="blockquote" style={{fontSize: "1rem"}}>
				<p>“{body}”</p>
				<footer class="blockquote-footer text-center mt-1">{backTitle}</footer>
			</blockquote>
		)}
	  </Card>
	</div>
	)
}
