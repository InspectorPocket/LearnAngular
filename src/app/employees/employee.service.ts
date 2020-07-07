import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pocket.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/mark.jpg'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('14/10/1979'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/mary.jpg'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('04/25/1976'),
            department: '3',
            isActive: false,
            photoPath: 'assets/images/john.jpg'
        }
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }
}