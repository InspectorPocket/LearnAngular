import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService,
    private _router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
            map(employee => {
                // '!!' converts into a boolean, '+' converts into a number
                const employeeExists = !!employee;
                
                if (employeeExists) {
                    return true;
                } else {
                    this._router.navigate(['not_found']);
                    return false;
                }
            }),
            catchError((err) => {
                console.log(err);
                return Observable.of(false);
            })
            // const employeeExists = !!this._employeeService.getEmployee(+route.paramMap.get('id'));
        );
        
    }
}