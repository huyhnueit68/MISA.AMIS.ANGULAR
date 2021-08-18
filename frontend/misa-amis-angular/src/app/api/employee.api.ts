import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApi {
  constructor(private readonly _api: ApiService) {}

  /**
   * Function get all employee
   * @returns employee list
   * CreatedBy: PQ Huy(18.08.2021)
   */
  getAllEmployee(){
    return this._api.get('v1/Employees/', '');
  }

  /**
   * Function delete employee
   * @param id id
   * @returns employee
   * CreatedBy: PQ Huy(18.08.2021)
   */
  deleteEmployee(id: string) {
    return this._api.delete('v1/Employees/' + id);
  }

  /**
   * Function create employee
   * @param name name
   * @returns employee
   * CreatedBy: PQ Huy(18.08.2021)
   */
  createEmployee(name: string) {
    return this._api.post('v1/Employees', { name });
  }

  /**
   * Function update employee
   * @param data data employee
   * @returns Employee
   * CreatedBy: PQ Huy(18.08.2021)
   */
  updateEmployee(id: any, data: any) {
    return this._api.put('v1/Employees/', id, data);
  }

  /**
   * Function get employee by id
   * @param id id
   * @returns result
   * CreatedBy: PQ Huy(18.08.2021)
   */
  getEmployeeById(id: string) {
    return this._api.get('v1/Employees/' + id, {});
  }
}
