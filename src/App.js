import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from './img/moon.jpg';
import { useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FlipCard from './components/FlipCard';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function App() {
	
	const ref = useRef();
	
	const start = 0;
	const introDuration = 7;
	const learningDuration = 7;
	const masteryDuration = 7;
	const helpingDuration = 7;
	const conclusionDuration = 7;

	const buffer = 1;

	// computed values, with buffer
	const introStart = start + 0;
	const learningStart = introStart + introDuration + buffer;
	const masteryStart = learningStart + learningDuration + buffer;
	const helpingStart = masteryStart + masteryDuration + buffer;
	const conclusionStart = helpingStart + helpingDuration + buffer;
	const end = conclusionStart + conclusionDuration;

	console.log(learningStart, masteryStart);
	
	return (
		<div className="App">
		<Parallax pages={100} ref={ref}>

		{/* INTRODUCTION SECTION */}
		
		<ParallaxLayer
		offset={introStart}
		speed={1}
		factor={1}
		style={{
			backgroundImage: `url(${moon})`,
			backgroundSize: 'cover',
		}}
		>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart}
		speed={0.1}
		className="flex-center flex-column"
		>
		<h1 className="display-1">Philosophy of Life</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart + 0.95}
		speed={-5}
		onClick={() => {
			console.log(ref);
			ref.current.scrollTo(3)
		}}
		>
		<h2>By Josh Moody</h2>
		</ParallaxLayer>

		<ParallaxLayer
		sticky={{start: introStart + 3, end: introStart + 5.5}}
		className="p-5"
		>
		<OverlayTrigger placement="bottom" overlay={
			<Tooltip>The inner sense of being at perfect harmony with the universe. Could be described as a "fulness of joy."</Tooltip>
		}>
		<h1 className="display-1 text-center w-100">The Good: Inner Peace</h1>
		</OverlayTrigger>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 3.5, end: introStart + 6}}
		className="flex-center"
		style={{ width: "33%" }}
		>
		<Card style={{borderRadius:0,width:"100%",height:"100%",backgroundColor:"black",color:"white", display:"flex",alignItems:"center",justifyContent:"center"}}>
		<Card.Title>1</Card.Title>
		Learn as much as possible
		<br />
		<i className="bi bi-book"></i>
		</Card>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 4, end: introStart + 6.5}}
		className="flex-center"
		style={{ width: "34%", marginLeft: "33%" }}
		>
		<Card style={{borderRadius:0,width:"100%",height:"100%",backgroundColor:"black",color:"white", display:"flex",alignItems:"center",justifyContent:"center"}}>
		<Card.Title>2</Card.Title>
		Develop self-mastery
		<br />
		<i className="bi bi-person-check"></i>
		</Card>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 4.5, end: introStart + 7}}
		className="flex-center"
		style={{ width: "33%", marginLeft: "67%" }}
		>
		<Card style={{borderRadius:0,width:"100%",height:"100%",backgroundColor:"black",color:"white", display:"flex",alignItems:"center",justifyContent:"center"}}>
		<Card.Title>3</Card.Title>
		Help other people do these things
		<br />
		<i className="bi bi-arrow-left"></i>
		</Card>
		</ParallaxLayer>

		{/* LEARNING SECTION */}

		<ParallaxLayer
		sticky={{start: learningStart, end: learningStart + 2}}
		className="p-5"
		>
		<h1 className="display-1 text-center w-100">1. Learn as much as possible</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: learningStart + 0.5, end: learningStart + 2}}
		className="flex-center text-light"
		>
		<FlipCard
			body={<p>The type of learning I'm talking about includes academic study, but goes far beyond it.
			Anything that increases one's <strong>knowledge</strong> or <strong>skills</strong> is a source of learning.
			Examples include intellectual reasoning, studies, personal experiences,
			close relationships, suffering, etc.</p>}
			title="What is learning?"
			backQuote={true}
			backTitle="Simone Weil"
			backBody="[Academic students] are no nearer to goodness than their brothers working in fields and factories.
			Peasants and workmen possess a nearness to God of incomparable savor which is found in the depths of poverty,
			in the absence of social consideration and in the endurance of long drawn-out sufferings." /> 
		
		<FlipCard
			title="Learning is its own reward"
			body="Marcus Aurelius claims that learning
			always leads to a more satisfying, pleasing outlook on the universe."
			backQuote={true}
			backBody="[I]f a man should have a feeling and deeper insight with respect to the things which are provided in the universe,
			there is hardly one of those which follow by way of consquenece which will not seem to him to be in a manner
			disposed as to give pleasure.... [E]ven the real gaping jaws of wild beasts."
			backTitle="Marcus Aurelius"
		/> 
		
		<FlipCard body="Application of quote" title="Explanation" backTitle="Philosopher" backBody="Quote" /> 
		
		</ParallaxLayer>

		{/* SELF-MASTERY SECTION */}

		<ParallaxLayer
		sticky={{start: masteryStart, end: masteryStart + 5.5}}
		className="p-5"
		>
		<h1 className="display-1 text-center w-100">2. Develop self-mastery</h1>
		</ParallaxLayer>

		{/* HELPING OTHERS SECTION */}

		
		{/* CONCLUSION SECTION */}
		
		</Parallax>
		</div>
		);
	}
	
	export default App;
	