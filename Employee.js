import React from "react"

class Employee extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
	}

	handleRemoveBtn() {
		this.props.onRemoveEmployee(this.props.id)
	}

	render() {
		return(
			<div className="employee" id={this.props.id}>
				<div className="em-name">{this.props.name}</div>
				<div className="em-job">{this.props.job}</div>
				<div className="em-remove"><span onClick={this.handleRemoveBtn}>Remove</span></div>
			</div>
		);
	}
}

export default Employee;