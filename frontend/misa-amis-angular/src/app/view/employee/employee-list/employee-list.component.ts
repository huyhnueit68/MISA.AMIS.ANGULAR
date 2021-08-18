import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/common/main.service';
import { CommonFn } from 'src/app/ts/common/CommonFn';
import Resource from 'src/app/ts/common/Resource';
import { EmployeeApi } from 'src/app/api/employee.api';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    @Input() employeeData: any;

    public isNoData = false;
    
    constructor(
        private _employeeApi: EmployeeApi,
        private _mainService: MainService
    ) { }

    ngOnInit(): void {
        this.getEmployee();
    }
    
    selectedItem(item: any) {
      
    }
    
    getEmployee(){
        this._employeeApi.getAllEmployee().subscribe((response) => {
            this.employeeData.gridData = response;
        }, (err) => {
            this._mainService.logError(err);
        })
    }

  /**
   * function format data
   * @param {data need format} data 
   * @param {data type of data} dataType 
   * @param {enum name for data} enumName 
   * @returns data
   * CreatedBy: PQ Huy (06.07.2021)
   */
    formatData(data: any, dataType: any, enumName: any) {
      debugger
      try {
        if (data != null) {
            // return this._commonFn.formatData(data, dataType, enumName);
            return data;
          }
          else {
              return data;
          }
      } catch (error) {
          throw error;
      }
  }

  /**
   * Check active menu
   * CreatedBy: PQ Huy(18.08.2021)
   */
  isActive(pageNumber: any) {
    try {
      return this._mainService.currentPage === pageNumber;
    } catch (error) {
      throw error;
    }
  }
  
  /**
   * Change page index
   * CreatedBy: PQ Huy(08.07.2021)
   */
  changePageByIndex(pageIndex: any){
      try {
          if(pageIndex != this._mainService.currentPage) {
              this.changePage(pageIndex);
          }
      } catch (error) {
          throw error;
      }
}
  
  /**
   * Function change page by index
   * CreatedBy: PQ Huy (08.07.2021)
   */
  changePage(pageIndex: number) {
    try {
      this._mainService.currentPage = pageIndex;

      // Emit to parent and call api paging
    } catch (error) {
      throw error;
    }
  }
  
  /**
   * Function set active chaged page
   * @param {string} option
   * CreatedBy: PQ Huy (09.07.2021)
   */
  setActiveChagePage(option: any){
      try {
          if(option == Resource.pageChange.Previous){
              if(this._mainService.currentPage > 1) {
                  return ['enable-change-index'];
              } else {
                  return ['disable-change-index'];
              }
          } else {
              if(this._mainService.currentPage < this._mainService.totalPage) {
                  return ['enable-change-index'];
              } else {
                  return ['disable-change-index'];
              }
          }
      } catch (error) {
          throw error;
      }
}
  
  /**
   * Function set page next
   * @param {string} option
   * CreatedBy: PQ Huy (09.07.2021)
   */
  nextPageIndex(option: any){
      try {
          if(option == Resource.pageChange.Previous){
              this.changePage(this._mainService.currentPage - 1);
          } else {
              this.changePage(this._mainService.currentPage + 1);
          }
      } catch (error) {
          throw error;
      }
}
  
  /**
   * Function check change page size
   * @param {Object} event
   * CreatedBy: PQ Huy (09.0.2021)
   */
  changePageSize(e: { value: any; }){
      try {
          this._mainService.pageSize = e.value;
          this._mainService.currentPage = 1;
          // Emit to parent and call api paging
      } catch (error) {
          throw error;
      }
}
  
  /**
   * Function display all page
   */
  displAllPage(totalPage: number){
      try {
          let listPage = [];
          for(var i = 1; i <= totalPage; i++) {
              listPage.push(i);
          }

          return listPage
      } catch (error) {
          throw error;
      }
}
  
  /**
   * Function set display icon no data
   * @param {boolen} state
   * CreatedBy: PQ Huy (10.07.2021)
   */
  setIsNoData(state: any){
      try {
          this.isNoData = state;
      } catch (error) {
          throw error;
      }
  }

}
