import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import moon from './img/moon.jpg';
import socrates from './img/header.jpg'
import lastSupper from './img/last-supper.jpg'
import aristotle from './img/aristotle.jpg'
import library from './img/library.jpg'
import service from './img/service.jpg'
import aurelius from './img/aurelius-bust.jpg'
import gandhi from './img/gandhi.jpg'
import universe from './img/universe-4.jpg'

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
	const learningDuration = 5;
	const masteryDuration = 7;
	const helpingDuration = 5;
	const conclusionDuration = 5;

	const buffer = 1;

	// computed values, with buffer
	const introStart = start + 0;
	const learningStart = introStart + introDuration + buffer;
	const masteryStart = learningStart + learningDuration + buffer;
	const helpingStart = masteryStart + masteryDuration + buffer;
	const conclusionStart = helpingStart + helpingDuration + buffer;
	const end = conclusionStart + conclusionDuration;

	const totalDuration = end - start;
	
	return (
		<div className="App">
		<Parallax pages={totalDuration} ref={ref}>

		{/* INTRODUCTION SECTION */}
		
		<ParallaxLayer
		offset={introStart}
		factor={1.05}
		style={{
			background: `rgba(0,0,0,0.325) url(${socrates})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart}
		speed={0.5}
		className="flex-center flex-column blend-text"
		>
		<h1 className="display-1">Philosophy of Life (working title)</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		offset={introStart + 0.95}
		speed={-5}
		style={{display:"flex", justifyContent:"center"}}
		onClick={() => {
			console.log(ref);
			ref.current.scrollTo(3)
		}}
		>
		<h2 className="blend-text">By Josh Moody</h2>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 1}
		factor={1.05}
		speed={0.05}
		style={{
			background: `rgba(0,0,0,0.35) url(${lastSupper})`,
			backgroundSize: 'cover',
			backgroundPosition: "center",
			backgroundBlendMode:"darken"
		}}
		>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 1}
		speed={.2}
		className="flex-center flex-column p-5 blend-text"
		>
			<h1 className="mb-3">Religious Disclaimer</h1>
			<p style={{maxWidth:"70ch"}}>
				I don't talk about Christianity or religion very much in this project. This is intentional.
			</p>
			<p style={{maxWidth:"70ch"}}>
				My beliefs are centered in Christianity,
				but I want to articulate them using the language of philosophy
				instead of the language of the gospel of Jesus Christ.
			</p>
			<p style={{maxWidth:"70ch"}}>
				Otherwise, I fear I would take the easy way out
				and rely too heavily on my prior religious knowledge
				instead of what I learned in this class.
			</p>
		</ParallaxLayer>

		<ParallaxLayer
		offset={introStart + 2}
		factor={2.75}
		speed={0.01}
		className="bg-cover"
		style={{
			backgroundColor: `rgba(0,0,0,0.35)`,
			backgroundImage: `url(${universe})`,
			backgroundPosition:"center",
			backgroundBlendMode:"multiply",
			zIndex:-1,
		}}
		>
		</ParallaxLayer>

		<ParallaxLayer
		offset={2.43}
		speed={0.1}
		factor={0.5}
		style={{zIndex:1, maxWidth:"50em"}}
		className="p-5 flex-center flex-column mx-auto"
		>
		<OverlayTrigger placement="bottom" overlay={
			<Tooltip>The inner sense of being at perfect harmony with the universe. Could also be described as a "fulness of joy."</Tooltip>
		}>
			<h1 className="display-1 text-center w-100 text-light">The Good: Inner Peace</h1>
		</OverlayTrigger>
		</ParallaxLayer>

		<ParallaxLayer
		offset={2.5}
		speed={0.18}
		className="p-5 flex-center flex-column"
		>
		<>
			<h2 className="display-5 text-center w-100 blend-text mt-5" style={{maxWidth:"40ch"}}>
			The inner sense of being at perfect harmony with the universe. Could also be described as a "fulness of joy."
			</h2>
		</>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 3.5, end: introStart + 5.5}}
		className="flex-center"
		style={{ width: "33%"}}
		>
		<Card style={{
			borderRadius:0,
			width:"100%",
			height:"100%",
			background: `rgba(0,0,0,0.3) url(${library})`,
			backgroundPosition:"center",
			backgroundBlendMode: "darken",
			backgroundSize:"cover",
			color:"white",
			display:"flex",
			alignItems:"center",
			justifyContent:"center"}}
		>
		<strong className="display-6 text-center m-5">Learn as much as possible</strong>
		</Card>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 4, end: introStart + 6}}
		className="flex-center"
		style={{ width: "34%", marginLeft: "33%" }}
		>
		<Card style={{
			borderRadius:0,
			width:"100%",
			height:"100%",
			background: `rgba(0,0,0,0.3) url(${aristotle})`,
			backgroundPosition:"center",
			backgroundBlendMode: "darken",
			backgroundSize:"cover",
			color:"white",
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
		}}
		>
		<strong className="display-6 text-center m-5">Develop self-mastery</strong>
		</Card>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: introStart + 4.5, end: introStart + 6.5}}
		className="flex-center"
		style={{ width: "33%", marginLeft: "67%" }}
		>
		<Card style={{
			borderRadius:0,
			width:"100%",
			height:"100%",
			background: `rgba(0,0,0,0.3) url(${service})`,
			backgroundPosition:"bottom 50% right 25%",
			backgroundBlendMode: "darken",
			backgroundSize:"cover",
			color:"white",
			display:"flex",
			alignItems:"center",
			justifyContent:"center"}}
		>
		<strong className="display-6 text-center m-5">Help others learn and master themselves</strong>
		</Card>
		</ParallaxLayer>

		{/* LEARNING SECTION */}

		<ParallaxLayer
		sticky={{start: learningStart, end: learningStart + 1.95}}
		style={{zIndex: 2}}
		className="p-5"
		>
		<h1 className="display-1 text-center w-100">1. Learn as much as possible</h1>
		</ParallaxLayer>
		
		<ParallaxLayer
		sticky={{start: learningStart + 0.5, end: learningStart + 1.5}}
		style={{zIndex:5}}
		className="flex-center text-light"
		>
		<FlipCard
			body={<p>The type of learning I'm talking about includes academic study, but goes far beyond it.
			Anything that increases one's <strong>knowledge</strong> or <strong>skills</strong> is a source of learning.
			Examples include academic study, personal experience,
			close relationships, and suffering.</p>}
			title="What is learning?"
			backQuote={true}
			bgColor="teal"
			backTitle="Simone Weil"
			backBody="[Academic students] are no nearer to goodness than their brothers working in fields and factories.
			Peasants and workmen possess a nearness to God of incomparable savor which is found in the depths of poverty,
			in the absence of social consideration and in the endurance of long drawn-out sufferings." /> 
		
		<FlipCard
			title="Learning is its own reward"
			body="Marcus Aurelius claims that learning
			always leads to a more satisfying, pleasing outlook on the universe."
			backQuote={true}
			bgColor="royalblue"
			backBody="[I]f a man should have a feeling and deeper insight with respect to the things which are provided in the universe,
			there is hardly one of those which follow by way of consquenece which will not seem to him to be in a manner
			disposed as to give pleasure&hellip;even the real gaping jaws of wild beasts."
			backTitle="Marcus Aurelius"
		/> 
		
		<FlipCard
			body="Application of quote"
			title="Learning requires humility"
			backQuote={true}
			backTitle="Lao-tzu"
			bgColor="darkslateblue"
			backBody="To know and yet (think) we do not know is the highest (attaiment); not to know (and yet think) we do know is a disease"
		/> 
		
		</ParallaxLayer>

		<ParallaxLayer
		sticky={{start: learningStart + 2.3, end: learningStart + 3.3}}
		className="p-5"
		style={{zIndex:2}}
		>
		<h1 className="display-1 text-center w-100">The importance of faith and humility</h1>
		</ParallaxLayer>

		<ParallaxLayer
			offset={learningStart + 2.275}
			speed={.05}
			factor={2}
			style={{backgroundColor:"khaki"}}
			className="flex-center"
		>
			New content
		</ParallaxLayer>

		<ParallaxLayer
		sticky={{start: learningStart + 4, end: learningStart + 4.5}}
		className="p-5"
		style={{zIndex:2}}
		>
		<h1 className="display-1 text-center w-100">Personal Application</h1>
		</ParallaxLayer>

		<ParallaxLayer
			offset={learningStart + 4}
			speed={.08}
			factor={2}
			style={{backgroundColor:"coral",}}
			className="flex-center p-5 flex-column"
		>
			I exercise but refuse to do competitive sports.
			I am very pain-averse and naturally do NOT want to physically exert myself. But I do it anyway.
			I don't particularly care about looking good or being strong,
			I just like the feeling of using my mind to push my body farther than my body wants to go. But I avoid competition because
			that doesn't serve any purpose.
		</ParallaxLayer>


		{/* SELF-MASTERY SECTION */}

		<ParallaxLayer
		sticky={{start: masteryStart, end: masteryStart + 0.23}}
		className="p-5"
		style={{zIndex:1, width:"70%"}}
		>
		<h1 className="display-1 text-center w-100">2. Develop self-mastery</h1>
		</ParallaxLayer>

		
		<ParallaxLayer
			offset={masteryStart}
			sticky={{start:masteryStart-0.2, end:masteryStart+3.2}}
			style={{
				backgroundColor:"transparent",
				width:"30%",
				left:"70%!important",
				marginLeft:"70%!important",
				float:"right",
				backgroundImage:`url(${aurelius})`,
				backgroundPosition:"center",
				backgroundSize:"cover",
				zIndex:-1
			}}
			className="flex-center p-5"
		>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart}
			speed={0.102}
			factor={1.11}
			style={{backgroundColor:"cornflowerblue", width: "70%", zIndex:5}}
			className="flex-center p-5"
		>
			<blockquote className="blockquote" style={{fontSize:"1.5rem",zIndex:6}}>
				<p>&ldquo;No longer talk at all about the kind of man that a good man ought to be, but be such.&rdquo;</p>
				<footer className="blockquote-footer text-dark fade-light">Marcus Aurelius</footer>
			</blockquote>

		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 1}
			speed={0.1}
			factor={1.11}
			style={{backgroundColor:"mediumaquamarine", width: "70%"}}
			className="flex-center flex-column p-5"
		>
			<h2>Apply What You Learn</h2>
			<p style={{maxWidth:"70ch"}}>
				Learning by itself is not sufficient to produce inner peace and harmony. Knowledge and skills must be used properly.
				Another way of phrasing "self-mastery" might be "the proper application of knowledge."
				By nature of being imperfect beings, humans have to wrestle with desires and behaviors that contradict what we know to be true.
				In order to properly apply knowledge, we must develop enough control over our passions that we can act in perfect accordance with our knowledge.
			</p>

		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 2}
			speed={0.1}
			factor={1.25}
			style={{backgroundColor:"mediumslateblue", width: "70%"}}
			className="flex-center flex-column p-5"
		>
			<h2>Disregard Pain and Pleasure</h2>
			<p style={{maxWidth:"70ch"}}>
				Humans are predisposed to seek pleasure while avoiding pain. However, Aurelius makes the case that pleasure and pain have no intrinsic
				value: "[P]ain and pleasure... eqully happen to good men and bad, being things which make us neither better nor worse.
				Therefore they are neither good nor evil."
			</p>

			<p style={{maxWidth:"70ch"}}>
				I agree with Aurelius' overall sentiment with one caveat.
				I would argue that pain actually can "make us better" if we
				allow it to do so. Pain can be a powerful teaching tool that helps us avoid harmful behaviors.
				It can also increase our empathy for others. Avoiding pain increases our chances of living longer.
				Living longer enables us to learn more things and help more people.
			</p>
			
		</ParallaxLayer>


		<ParallaxLayer
			offset={masteryStart + 3}
			speed={0.125}
			factor={1.2}
			style={{backgroundColor:"#9e3df6", width: "70%"}}
			className="flex-center flex-column p-5"
		>
			<h2>Avoid Complaint and Judgement</h2>
			<p style={{maxWidth:"70ch"}}>
			Complaining is another natural human tendency. Aurelius encourages us to avoid complaining and accept those things which are out of our control.
			"Take away the complaint, "I have been harmed," and the harm is taken away."
			"If thou art pained by any external thing, it is not this thing that disturbs thee, but thy own judgement about it.
			And it is in they power to wipe out this judgement now."
			</p>

			<p style={{maxWidth:"70ch"}}>
			We cannot control most things that happen to us. Aurelius claims that complaining about them not only INCREASES the suffering but the complaint is actually the CAUSE
			of the suffering! However, there are some things we can control, and we must do all that is in our power to make things right.
			"If thou are pained because thou art not doing some particular thing which seems to thee to be right, why dost thou not rather act than complain?"
			</p>

			<p style={{maxWidth:"70ch"}}>
			"Let there be freedom from perturbations with respect to the things which come from the external cause; and let there be
			justice in the things done by virtue of the internal cause."
			Does "Freedom from perturbations" sound like "inner peace" to you? I think it does.
			</p>
		</ParallaxLayer>


		<ParallaxLayer
			sticky={{start:masteryStart+4, end:masteryStart+4.5,}}
			style={{
				backgroundColor:"transparent",
				width:"30%",
				backgroundImage:`url(${gandhi})`,
				backgroundSize:"cover",
				backgroundPosition:"center",
			}}
			className="flex-center p-5"
		>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart + 4}
			speed={0.1}
			factor={1.35}
			style={{backgroundColor:"tan", width:"70%", left:"70%!important", marginLeft:"70%!important", float:"right", zIndex:5}}
			className="flex-center flex-column p-5"
		>
			<h2>A Second Witness</h2>
			<p style={{maxWidth:"70ch"}}>
			Gandhi is another individual who discussed the principle of self-mastery extensively. His concept of "self-purification" is quite similar to what
we have discussed so far, but with a subtle difference.

			</p>

			<blockquote className="blockquote">
				<p>
					&ldquo;God [Truth] can never be realized by one who is not pure of heart....
					<br />
					But the path of self-purification is hard and steep.
					<br />
					To attain to perfect purity one has to become absolutely
					<br />
					passion-free in thought, speech, and action.&rdquo;</p>
				<footer className="blockquote-footer fade-light text-dark">Mahatma Gandhi</footer>
			</blockquote>

			<p style={{maxWidth:"70ch", width:"100%"}}>
				Gandhi's philosophy has many things in common with Aurelius' stoicism.
				However, Gandhi believes passion is inherently <em>immoral</em> (bad),
				while Aurelius believes passion is <em>amoral</em> (neither good nor bad).
			</p>
			<p style={{maxWidth:"70ch"}}>
				I side with Aurelius on this one. I believe that having desires is perfectly fine so long as they are controlled properly.
			</p>

			<blockquote className="blockquote">
				<p>
					&ldquo;[S]ee that ye bridle all your passions, that ye may be filled with love&rdquo;</p>
				<footer className="blockquote-footer fade-light text-dark">Alma 38:12</footer>
			</blockquote>
		</ParallaxLayer>

		<ParallaxLayer
			offset={masteryStart}
			sticky={{start:masteryStart+5.5, end:masteryStart+6,}}
			style={{backgroundColor:"transparent"}}
			className="flex-center p-5 flex-column"
		>
			<h2>Personal Example</h2>
			I exercise but refuse to do competitive sports.
			I am very pain-averse and naturally do NOT want to physically exert myself. But I do it anyway.
			I don't particularly care about looking good or being strong,
			I just like the feeling of using my mind to push my body farther than my body wants to go. But I avoid competition because
			that doesn't serve any purpose.
		</ParallaxLayer>




		{/* HELPING OTHERS SECTION */}
		<ParallaxLayer
		sticky={{start: helpingStart, end: helpingStart + 5}}
		className="p-5 mx-auto flex-center"
		style={{maxWidth:"52em", zIndex:-100}}
		>
		<h1 className="display-1 text-center w-100">3. Help Others Learn &amp; Master Themselves</h1>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 0.75}
		speed={0.3}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft:"13%"}}
		>
			<FlipCard
				backQuote={true}
				backBody={<>Judging others makes us blind,<br />whereas love is illuminating.</>}
				backTitle="Dietrich Bonhoeffer"
				body="If it is in one's power to help others, it is morally necessary to do so. This help
				should be given in a spirit of nonjudgmental love."
				title="Judge not"
			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 1.15}
		speed={.05}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft:"60%"}}
		>
			<FlipCard
				body="Helping others helps us grow personally as well.
				Loving and serving others enables all people to grow individually and collectively towards living the good life."
				title="Virtuous cycle"
				backQuote={true}
				backTitle="Dietrich Bonhoeffer"
				backBody="To serve our brother, to please him, to allow him his due and to let him live, is the way of self-denial, the way of the cross.
				Greater love hath no man that this, that a man lay down his life for his friends."
			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 1.45}
		speed={.75}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft:"20%"}}
		>
			<FlipCard
				title="Don't overdo it"
				body="Don't stress about helping people who are outside of your control. Sure, care about them. Don't be a monster. But don't beat yourelf up
				for having limited means. (personal experience from that one essay)."
				backQuote={true}
				backTitle="Anne Lindbergh"
				backBody="We are asked today to feel compassionately for everyone in the world; to digest intellectually all the information spread
				out in public print; and to implement in action every ethical impulse aroused by our hearts and minds. The inter-relatednss of the world
				link us constantly with more people than the our hearts can hold. Or rather—for I believe the hart is infinite—modern communication
				loads us with more problems than the human frame can carry."
				height={430}
				width={430}
			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 1.98}
		speed={0.61}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft: "67%"}}
		>
			<FlipCard
				title="What if they don't want help?"
				body={<>People often resist exiting the cave until they adjust to the light.
				We should always strive, without forcing, to help others live the good life.
				However, we should respect the beliefs of others.</>}
				backQuote={true}
				backTitle="William James"
				backBody="We ought... delicately and profoundly to respect one another's mental freedom:
				then only shall we bring about the intellectual republic."

			>
			</FlipCard>
		</ParallaxLayer>

		<ParallaxLayer
		offset={helpingStart + 2.35}
		speed={.1}
		factor={1}
		style={{backgroundColor:"transparent", marginLeft: "19%"}}
		>
			<FlipCard
				body="One more quote here"
			>
			</FlipCard>
		</ParallaxLayer>

		
		{/* CONCLUSION SECTION */}

		<ParallaxLayer
		sticky={{start: conclusionStart, end: conclusionStart + 3.5}}
		className="p-5"
		>
		<h1 className="display-1 text-center w-100">Conclusion</h1>
		</ParallaxLayer>


		<ParallaxLayer
		offset={end-1}
		className="flex-center"
		style={{backgroundColor:"tomato"}}
		>
			<h2 style={{fontSize:"64px", color:"white"}}>Thank you!</h2>
		</ParallaxLayer>

		
		</Parallax>
		</div>
		);
	}
	
	export default App;
	