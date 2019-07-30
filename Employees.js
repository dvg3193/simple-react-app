import React from "react"
import Employee from "./Employee"
import AddEmployee from "./AddEmployee"

class Employees extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [],
		};
		this.handleAddEmployee = this.handleAddEmployee.bind(this);
		this.handleRemoveEmployee = this.handleRemoveEmployee.bind(this);
	}

	handleAddEmployee(employee) {
		const newEmployeeList = this.state.employees.concat(
			{
				id: employee.id,
				name: employee.name,
				job: employee.job
			}
		);
		this.setState({
			employees: newEmployeeList
		});
	}

	handleRemoveEmployee(employeeId) {
		const newEmployeeList = this.state.employees.filter(employee => 
	      	employee.id !== employeeId
	    	)
		this.setState({
			employees: newEmployeeList
	    });
	}

	render() {
		const employees = this.state.employees.map(employee => 
			<Employee
				key={employee.id}
				id={employee.id}
				name={employee.name}
				job={employee.job}
				onRemoveEmployee={this.handleRemoveEmployee}
			/>
		)
		return(
			<div className="list">
				<div className="list-header">
					<div className="className">Name</div>
					<div className="job">Job</div>
					<div className="remove">Remove</div>
				</div>
				<div className="list-body">
					{employees}
				</div>
				<AddEmployee onAddEmployee={this.handleAddEmployee}/>
			</div>
		);
	}
}

export default Employees;