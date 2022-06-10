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

  return (
    <div className="App">
      <Parallax pages={100} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
	  className="flex-center flex-column"
        >
          <h1 className="display-1">Philosophy of Life</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.95}
	  speed={-2}
          onClick={() => {
            console.log(ref);
            ref.current.scrollTo(3)
          }}
        >
          <h2>By Josh Moody</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 3, end: 5.5}}
	  className="p-5"
        >
	  <h1 className="display-1">The Good</h1>
        </ParallaxLayer>

        <ParallaxLayer
	  sticky={{start: 3.5, end: 6}}
	  className="flex-center"
	  style={{ width: "33.3%" }}
        >
	  <Card variant={"Dark"} bg={"dark"} style={{width:"100%", margin: "2rem"}}>
	    <Card.Title>1</Card.Title>
	    <Card.Body>
	     Learn as much as possible
	      <br />
	      <i className="bi bi-book"></i>
	    </Card.Body>
	  </Card>
        </ParallaxLayer>

        <ParallaxLayer
	  sticky={{start: 4, end: 6.5}}
	  className="flex-center"
	  style={{ width: "33.3%", marginLeft: "33.3%" }}
        >
	  <Card variant={"Dark"} bg={"dark"} style={{width:"100%", margin: "2rem"}}>
	    <Card.Title>2</Card.Title>
	    <Card.Body>
	      Develop self-mastery
	      <br />
	      <i className="bi bi-person-check"></i>
	    </Card.Body>
	  </Card>
        </ParallaxLayer>

        <ParallaxLayer
	  sticky={{start: 4.5, end: 7}}
	  className="flex-center"
	  style={{ width: "33.3%", marginLeft: "66.6%" }}
        >
	  <Card variant={"Dark"} bg={"dark"} style={{width:"100%", margin: "2rem"}}>
	    <Card.Title>3</Card.Title>
	    <Card.Body>
	      Help as many people as possible do this
	      <br />
	      <i className="bi bi-arrow-left"></i>
	    </Card.Body>
	  </Card>
        </ParallaxLayer>

	<ParallaxLayer
	  offset={8}
	>
	 <FlipCard body="test card" title="test title" /> 
	</ParallaxLayer>

        <ParallaxLayer
	  sticky={{start: 9, end: 12}}
	  className="flex-center"
        >
	  <Card variant={"Dark"} bg={"dark"} style={{width:"100%", margin: "2rem"}}>
	    <Card.Title>3</Card.Title>
	    <Card.Body>
	      Help as many people as possible do this
	      <br />
	      <i className="bi bi-arrow-left"></i>
	    </Card.Body>
	  </Card>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
