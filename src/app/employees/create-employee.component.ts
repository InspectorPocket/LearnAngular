import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departments } from '../models/department.model';
import { Employee } from "../models/employee.model";
import { EmployeeService } from "./employee.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-create-employee',
    templateUrl: './create-employee.component.html',
    styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
    previewPhoto = false;

    // employee here is what you use in the html to reference this class
    // Employee is the model that is imported above
    employee: Employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        email: '',
        phoneNumber: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null
    }

    departments: Departments[] = [
        { id: 1, name: 'Help Desk' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'IT' },
        { id: 4, name: 'Payroll' },
        { id: 5, name: 'Admin' }
    ];

    constructor( private _employeeService: EmployeeService,
                            private _router: Router) { }

    togglePhotoPreview() {
        this.previewPhoto = !this.previewPhoto;
    }

    ngOnInit() {
    }

    saveEmployee(): void {
        this._employeeService.save(this.employee);
        this._router.navigate(['list']);
    }
}
