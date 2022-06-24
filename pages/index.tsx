import type { NextPage } from "next";
import Head from "next/head";
// local
import { Navbar, AnimatedBg } from "../components";
import Accordions from "../templates/Home/Accordions";
import Intro from "../templates/Home/Intro";

const Home: NextPage = () => {
	return (
		<div className="w-full text-center font-sans bg-indigo-900 text-white">
			<Head>
				<title>Frontierx</title>
				<meta name="description" content="Frontierx - Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<AnimatedBg>
				<main className="m-auto max-w-screen-2xl">
					<Intro />
					<Accordions />
				</main>
			</AnimatedBg>
			<footer className="py-20 w-full bg-[#0D0D0D]">
				<p className="m-auto  ">LOGO</p>
			</footer>
		</div>
	);
};

export default Home;
