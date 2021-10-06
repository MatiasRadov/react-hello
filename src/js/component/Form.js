import React from "react";

const Form = props => {
	return (
		<div className="mx-4">
			<form className="bg-light my-4 py-3 col-12 border border-3 rounded">
				<div className="col-6">
					<div className="mb-3 mx-3">
						<label for="widthInput" className="form-label">
							X Value
						</label>
						<input
							type="number"
							className="form-control"
							id="widthInput"
							value={props.handleWidthChange}
						/>
					</div>
					<div className="mb-3 mx-3">
						<label for="heightInput" className="form-label">
							Y Value
						</label>
						<input
							type="number"
							className="form-control"
							id="heightInput"
							value={props.handleWidthChange}
						/>
					</div>

					<button type="submit" className="btn btn-primary mx-3">
						Submit
					</button>
				</div>
				<div className="col-6 d-flex justify-content-center align-items-center">
					<div
						style={{ width: props.width, height: props.height }}
						className="border border-2 bg-danger"></div>
				</div>
			</form>
		</div>
	);
};

export default Form;
