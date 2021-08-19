import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/common/main.service';
import { CommonFn } from 'src/app/ts/common/CommonFn';
import Resource from 'src/app/ts/common/Resource';
import { EmployeeApi } from 'src/app/api/employee.api';
import Enumeration from 'src/app/ts/common/Enumeration';
import { EmployeeService } from 'src/app/Service/page/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    @Input() employeeData: any;

    public isNoData = false;
    public noData = false;
    public isDrop = false;

    private _commonFn = new CommonFn();
    
    constructor(
        private _employeeApi: EmployeeApi,
        private _mainService: MainService,
        private _employeeService: EmployeeService
    ) { }

    


    ngOnInit(): void {
        this.getEmployee();
    }
    
    selectedItem(item: any) {
      
    }
    
    /**
     * Function set employee data
     * CreatedBy: PQ Huy (18.08.2021)
     */
    getEmployee() {
        // show loading
        this._mainService.showLoadding = true;

        this._employeeApi.getAllEmployee().subscribe((response) => {
            this.employeeData.gridData = response;

            // disable loading and icon no data
            this._mainService.showLoadding = false;
            this.noData = false;
        }, (err) => {
            // write error and show icon no data
            this._mainService.logError(err);
            // disable loading and icon no data
            this._mainService.showLoadding = false;
            this.noData = true;
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
      try {
        if (data != null) {
            return this._commonFn.formatData(data, dataType, enumName);
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
        //   if(option == this._resource.pageChange.Previous){
        //       if(this._mainService.currentPage > 1) {
        //           return ['enable-change-index'];
        //       } else {
        //           return ['disable-change-index'];
        //       }
        //   } else {
        //       if(this._mainService.currentPage < this._mainService.totalPage) {
        //           return ['enable-change-index'];
        //       } else {
        //           return ['disable-change-index'];
        //       }
        //   }
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
        //   if(option == this._resource.pageChange.Previous){
        //       this.changePage(this._mainService.currentPage - 1);
        //   } else {
        //       this.changePage(this._mainService.currentPage + 1);
        //   }
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

  /**
   * Function reset selected all
   * CreatedBy: PQ Huy (09.07.2021)
   */
  resetSelectedAll(){
      try {
          // this.$refs.selectedAll.value = "";
          // this.selected = [];
      } catch (error) {
          throw error;
      }
  }

  /**
   * Function copy record
   * @param {object} item
   * CreatedBy: PQ Huy(06.07.2021)
   * UpdateBy: PQ Huy(07.07.2021)
   */
  async copyRecord(item: any){
      try {
          // // Set new code for data
          // await EmployeesApi.getNewEmployeeCode().then((response) => {
          //     this.cloneCode = response.data;
          // }).catch((error) => {
          //     // open dialog form notification
          //     console.error(error);
          // });

          // // set state edit form
          // this.$store.state.formMode = Enumeration.FormMode.Add;

          // // emit data to employee content
          // this.$emit('openDialogCopy',this.cloneCode, item);
      } catch (error) {
          throw error;
      }
  }

  /**
   * Function set index important for drop icon 
   * @param {bool} isShow
   * CreatedBy: PQ Huy (06.07.2021)
   */
  unIndexImportant(){
      try {
          this.isDrop = false;
      } catch (error) {
          throw error;
      }
  }

  /**
   * Function set class drop box
   * @param {Object} index
   * CreatedBy: PQ Huy (06.07.2021)
   */
  setIndexImportant(index: any){
      try {
          document.getElementsByClassName('set-drop-box')[index].classList.add('index-important');
          document.getElementsByClassName('set-drop-box')[index+1].classList.remove('index-important');
      } catch (error) {
          throw error;
      }
  }

  /**
   * Function delete reocord
   * @param {Object} index
   * CreatedBy: PQ Huy (08.07.2021)
   */
  deleteRecord(item: any) {
      try {
          // Opent dialog form confirm delete
          // this.$emit('deleteRecord', item);
      } catch (error) {
          throw error;
      }
  }

}
