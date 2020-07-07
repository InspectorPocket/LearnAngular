import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from "./employee.service";

@Component({
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

    // employeeToDisplay: Employee;
    // private arrayIndex = 1;
    
    employees: Employee[];
    dataFromChild: Employee;
    constructor(private _employeeService: EmployeeService) { }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
        // this.employeeToDisplay = this.employees[0];
    }

    // nextEmployee(): void {
    //     if (this.arrayIndex <= 2) {
    //         this.employeeToDisplay = this.employees[this.arrayIndex];
    //         this.arrayIndex++;
    //     } else {
    //         this.employeeToDisplay = this.employees[0];
    //         this.arrayIndex = 1;
    //     }
    // }

    handleNotify(eventData: Employee) {
        this.dataFromChild = eventData;
    }

}
