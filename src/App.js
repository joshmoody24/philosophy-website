import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import moon from './img/moon.jpg';
import { useRef } from 'react';

import Button from 'react-bootstrap/Button';

function App() {

  const ref = useRef();

  return (
    <div className="App">
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={.05}
          factor={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>Welcome to the website</h2>
          <Button>Test</Button>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}
        >
          <h2>Testing page</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          sticky={{ start: 0.9, end: 2.5 }}
          onClick={() => {
            console.log(ref);
            ref.current.scrollTo(3)
            console.log("test")
          }}
        >
          <h2>Sticky, click to scroll</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        >
          <h2>Testing page</h2>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
