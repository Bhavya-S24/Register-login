import React from "react";


function WelcomePage() {

	return (
		<div className="welcome">
		<h1> Welcome to Home Page {localStorage.getItem("Name")}  </h1>
		</div>
	);
}



export default WelcomePage