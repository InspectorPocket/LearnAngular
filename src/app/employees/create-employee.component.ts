import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departments } from '../models/department.model'

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

    departments: Departments[] = [
        { id: 1, name: 'Help Desk' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'IT' },
        { id: 4, name: 'Payroll' }
    ];

    constructor() { }

    ngOnInit() {
    }

    saveEmployee(empForm: NgForm): void {
        console.log(empForm.value);
    }
}
