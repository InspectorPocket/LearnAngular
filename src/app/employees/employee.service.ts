import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

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
            dateOfBirth: new Date('12/10/1979'),
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

    getEmployees(): Observable<Employee[]> {
        return Observable.of(this.listEmployees).delay(2000);
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }

    save(employee: Employee) {
        if (employee.id === null) {
            const maxid = this.listEmployees.reduce(function(e1, e2) {
                // compares each item from left to right, returning the value that is higher.
                // When there are no more values to compare, and it has reached the highest value id, then it will return that as an object.
                return (e1.id > e2.id) ? e1 : e2;
            }).id; // adding .id will return the id number of the object, rather that 'id: n'.
            // Add 1 to this to add a new id value to the new employee.
            employee.id = maxid + 1;
            this.listEmployees.push(employee);
        } else {
            const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
            this.listEmployees[foundIndex] = employee;
        }
    }

    deleteEmployee(id: number) {
        const i = this.listEmployees.findIndex(e => e.id === id);
        if (i !== -1) {
            this.listEmployees.splice(i, 1)
        }
    }
}