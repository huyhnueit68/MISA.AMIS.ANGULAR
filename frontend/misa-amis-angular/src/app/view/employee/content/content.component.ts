import { Component, OnInit } from '@angular/core';

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
          },
          {
              columnName: "TÊN NHÂN VIÊN",
              fieldName: "employeeName",
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
          },
          {
              columnName: "SỐ CMND",
              fieldName: "identityNumber",
          },
          {
              columnName: "CHỨC DANH",
              fieldName: "employeePosition",
          },
          {
              columnName: "TÊN ĐƠN VỊ",
              fieldName: "departmentName",
          },
          {
              columnName: "SỐ TÀI KHOẢN",
              fieldName: "bankAccountNumber",
          },
          {
              columnName: "TÊN NGÂN HÀNG",
              fieldName: "bankName",
          },
          {
              columnName: "CHI NHÁNH TK NH",
              fieldName: "bankBranchName",
          }
      ],
      gridData: [],
      idFieldName: "EmployeeId",
    }
  }

}
