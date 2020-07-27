import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
    constructor(private _employeeService: EmployeeService,
    private _router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // '!!' converts into a boolean, '+' converts into a number
        const employeeExists = !!this._employeeService.getEmployee(+route.paramMap.get('id'));

        if (employeeExists) {
            return true;
        } else {
            this._router.navigate(['not_found']);
            return false;
        }
    }
}