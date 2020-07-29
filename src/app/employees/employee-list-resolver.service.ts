import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EmployeeService} from "./employee.service";
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { ResolvedEmployeeList } from "./resolved-employee-list.model";

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string> {
    constructor(private _employeeService: EmployeeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
        // Resolver automatically subscribes to the observable
        return this._employeeService.getEmployees()
            .pipe(
                // map((employeeList) => new ResolvedEmployeeList(employeeList)),
                catchError((err: any) => Observable.of(err))
            );
    }
}