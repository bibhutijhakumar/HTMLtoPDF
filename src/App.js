import React from "react"
import './App.css';

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Signin from "./components/content/Signin";
import SignUp from "./components/content/SignUp";

function App(showLineNumbers) {
	
	return (
		<div className="App text-zinc-700 text-lg">
			<Header />
			<Content />
			<Signin />
			<SignUp />
			<Footer />
		</div>
	);
}

export default App;
