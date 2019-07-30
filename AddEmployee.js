import React from "react"

class AddEmployee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			job: ""
		};

		this.handleInputName = this.handleInputName.bind(this);
		this.handleInputJob = this.handleInputJob.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputName(e) {
		this.setState({
			name: e.target.value
		})
	}

	handleInputJob(e) {
		this.setState({
			job: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.name !== "" && this.state.job !== "") {
			this.props.onAddEmployee({
				id: Date.now(),
				name: this.state.name,
				job: this.state.job
			});
			this.setState({
				name: "",
				job: ""
			});
		}
	}

	render() {
		return(
			<div className="add-employee">
				<form onSubmit={this.handleSubmit}>
					<div className="user-input">
						<input type="text" value={this.state.name} placeholder="Name" onChange={this.handleInputName} />
					</div>
					<div className="user-input">
						<input type="text" value={this.state.job} placeholder="Job" onChange={this.handleInputJob} />
					</div>
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default AddEmployee;