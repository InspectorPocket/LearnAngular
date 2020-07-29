import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import{ HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient) {}
    
    // Client side
    // private listEmployees: Employee[] = [
    //     {
    //         id: 1,
    //         name: 'Mark',
    //         gender: 'Male',
    //         contactPreference: 'Email',
    //         email: 'mark@pocket.com',
    //         dateOfBirth: new Date('10/25/1988'),
    //         department: '3',
    //         isActive: true,
    //         photoPath: 'assets/images/mark.jpg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Mary',
    //         gender: 'Female',
    //         contactPreference: 'Phone',
    //         phoneNumber: 2345978640,
    //         dateOfBirth: new Date('12/10/1979'),
    //         department: '2',
    //         isActive: true,
    //         photoPath: 'assets/images/mary.jpg'
    //     },
    //     {
    //         id: 3,
    //         name: 'John',
    //         gender: 'Male',
    //         contactPreference: 'Phone',
    //         phoneNumber: 5432978640,
    //         dateOfBirth: new Date('04/25/1976'),
    //         department: '3',
    //         isActive: false,
    //         photoPath: 'assets/images/john.jpg'
    //     }
    // ];

    baseUrl = 'http://localhost:3000/employees';

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl)
            // Older method
            // .catch(this.handleError);

            // Pipe method
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ' + errorResponse.error.message);
        } else {
            console.error('Server Side Error: ' + errorResponse);
        }

        return new ErrorObservable('There is a problemo. We are working on fixing it.');
    }

    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
                .pipe(catchError(this.handleError));
        // return this.listEmployees.find(e => e.id === id);
    }

    addEmployee(employee: Employee): Observable<Employee> {
        // Server side method
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
        
        /* Client side method
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
        */
    }
    
    // void is used because nothing is being returned
    updateEmployee(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError));
    }

    deleteEmployee(id: number): Observable<void> {
        // Server method
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
                .pipe(catchError(this.handleError));
        
        // Client method
        // const i = this.listEmployees.findIndex(e => e.id === id);
        // if (i !== -1) {
        //     this.listEmployees.splice(i, 1)
        // }
    }
}