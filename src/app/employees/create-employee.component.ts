import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Departments } from '../models/department.model';
import { Employee } from "../models/employee.model";

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
        department: null,
        isActive: null,
        photoPath: null
    }

    departments: Departments[] = [
        { id: 1, name: 'Help Desk' },
        { id: 2, name: 'HR' },
        { id: 3, name: 'IT' },
        { id: 4, name: 'Payroll' }
    ];

    constructor() { }

    togglePhotoPreview() {
        this.previewPhoto = !this.previewPhoto;
    }

    ngOnInit() {
    }

    saveEmployee(newEmployee: Employee): void {
        console.log(newEmployee);
    }
}
