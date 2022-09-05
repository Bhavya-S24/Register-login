import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InitialPage() {

	let navigate = useNavigate();

	const [user, setUser] = useState({
		usrnm: "",
		phone: "",
		email: "",
		password: ""
	})

	const handleChange = (e) => {

		const name = e.target.name;
		const value = e.target.value;
		setUser({ ...user, [name]: value });
	}

	// const [record, setrecord] = useState({

	const [userL, setUserL] = useState({
		usrnmL: "",
		passwordL: ""
	})

	const handleChangeL = (e) => {

		const name = e.target.name;
		const value = e.target.value;
		setUserL({ ...userL, [name]: value });
	}

	function SendData() {

		localStorage.setItem("Name", user.usrnm);
			navigate('/welcome')

	}

	function SendLoginData() 
	{
		localStorage.setItem("Name", userL.usrnmL);
		navigate('/welcome')

	}

	return (
		<>
			<form className="registration">
				       <div className="borderone">
							 <legend className="legend">Register</legend>
				<div>
					<label htmlFor='usrnm'>Username    </label>
					<input type='text' name="usrnm" onChange={handleChange} value={user.usrnm} id="usrnm" />
				</div>

				<div>
					<label htmlFor='phone'>Phone    </label>
					<input type='number' name="phone" onChange={handleChange} value={user.phone} id="phone" />
				</div>

				<div>
					<label htmlFor='email'>Email    </label>
					<input type='email' name="email" onChange={handleChange} value={user.email} id="email" />
				</div>

				<div>
					<label htmlFor='password'>Password    </label>
					<input type='password' name="password" onChange={handleChange} value={user.password} id="password" />
				</div>
				
				<button className="buttons" onClick={() => { SendData() }}>Register</button>
				
				</div>
			</form>
			
			<br></br>

			<form className="Login">
      <div className="borderone">
			<legend className="legend">Login</legend>
				<div>
					<label htmlFor='usrnmL'>Username    </label>
					<input type='text' name="usrnmL" onChange={handleChangeL} value={userL.usrnmL} id="usrnmL" />
				</div>

				<div>
					<label htmlFor='passwordL'>Password    </label>
					<input type='password' name="passwordL" onChange={handleChangeL} value={userL.passwordL} id="passwordL" />
				</div>
				<button className="buttons" onClick={() =>{ SendLoginData() }}>Login</button>
				</div>
			</form>
			

		</>

	);
}

export default InitialPage;