import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card img={"https://m.media-amazon.com/images/I/71kT2yfNZHL.jpg"}/>
				<Card img={"https://hips.hearstapps.com/hmg-prod/images/bbyoda-1575303784.jpeg?resize=1200:*"}/>
				<Card img={"https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-16-at-5.26.01-PM.png"}/>
				<Card img={"https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-16-at-5.26.01-PM.png"}/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
