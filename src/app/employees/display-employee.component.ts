import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-display-employee',
    templateUrl: './display-employee.component.html',
    styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
    
    @Input() employee: Employee;
    @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

    // private _employee: Employee;
    // @Input() employeeId: number;

    // @Input()
    // set employee(val: Employee) {
    //     this._employee = val;
    // }
    // get employee(): Employee {
    //     return this._employee;
    // }

    // ngOnChanges(changes: SimpleChanges) {
    //     for(const propertyName of Object.keys(changes)) {
    //         const change = changes[propertyName];
    //         const from = JSON.stringify(change.previousValue);
    //         const to = JSON.stringify(change.currentValue);

    //         console.log(propertyName + ' changed from: ' + from + ' to ' + to);
            
    //     }
    // }

    constructor() { }

    ngOnInit() {
    }

    handleClick() {
        this.notify.emit(this.employee);
    }

}
