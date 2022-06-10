import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from './img/moon.jpg';
import { useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FlipCard from './components/FlipCard';

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
		<h1 className="display-1 text-center w-100">The Good: Inner Peace</h1>
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
		Help as many people as possible do this
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
		<FlipCard body="Application of quote" title="Explanation" backTitle="Philosopher" backBody="Quote" /> 
		<FlipCard body="Application of quote" title="Explanation" backTitle="Philosopher" backBody="Quote" /> 
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
	