import React from "react";

const Form = () => {
	return (
		<div className="mx-3 px-3 container-fluid justify-content-center align-items-center ">
			<form className="float-center form-div">
				<div className="mb-3">
					<div className="form-label">Email address</div>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<div className="form-label">Password</div>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<div className="form-check-label">Check me out</div>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
