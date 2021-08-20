import { Component, OnInit, ViewChild } from '@angular/core';
import Resource from 'src/app/ts/common/Resource';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    
    
    public employeeData = {}
    
    constructor() { }

    ngOnInit(): void {
        this.employeeData = {
        column: [
            {
                columnName: "MÃ NHÂN VIÊN",
                fieldName: "employeeCode",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "TÊN NHÂN VIÊN",
                fieldName: "employeeName",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "GIỚI TÍNH",
                fieldName: "gender",
                dataType: "Enum",
                enumName: "Gender",
            },
            {
                columnName: "NGÀY SINH",
                fieldName: "dateOfBirth",
                dataType: "Date",
                enumName: ""
            },
            {
                columnName: "SỐ CMND",
                fieldName: "identityNumber",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "CHỨC DANH",
                fieldName: "employeePosition",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "TÊN ĐƠN VỊ",
                fieldName: "departmentName",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "SỐ TÀI KHOẢN",
                fieldName: "bankAccountNumber",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "TÊN NGÂN HÀNG",
                fieldName: "bankName",
                dataType: "",
                enumName: ""
            },
            {
                columnName: "CHI NHÁNH TK NH",
                fieldName: "bankBranchName",
                dataType: "",
                enumName: ""
            }
        ],
        gridData: [],
        idFieldName: "EmployeeId",
        }
    }

    @ViewChild("employeeList") employeeList: any;
    @ViewChild("employeeDetail") employeeDetail: any;

    /**
     * Function refresh data
     * CreatedBy: PQ Huy (19.08.2021)
     */
    refreshEvent() {
        this.employeeList.getEmployee();
    }

    /**
     * Add new employee
     */
    addEmployee() {
        debugger
        this.employeeDetail.OpenDialog('', Resource.TitleForm.AddForm);
    }

}
