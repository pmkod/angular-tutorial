import { Component } from "@angular/core";

export type Department = "IT" | "Marketing" | "HR";
export type Level = "J" | "M" | "S";

export interface Employee {
	_id: string;
	name: string;
	department: Department;
	level: Level;
}

@Component({
	selector: "app-employee",
	imports: [],
	templateUrl: "./employee.component.html",
	styleUrl: "./employee.component.scss",
})
export class EmployeeComponent {
	employee: Employee = {
		_id: "675173e704ea0d53bbcdb314",
		name: "User Tooto",
		department: "IT",
		level: "J",
	};
}
