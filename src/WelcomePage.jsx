import React from "react";


function WelcomePage() {

	return (
		<>
		<h1> Welcome {localStorage.getItem("Name")}  </h1>
		</>
	);
}



export default WelcomePage