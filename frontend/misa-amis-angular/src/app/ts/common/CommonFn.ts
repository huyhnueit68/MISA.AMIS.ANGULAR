import Enumeration from "./Enumeration";
import Resource from "./Resource";
import * as moment from 'moment';

export class CommonFn{

    constructor() { }
    
    /**
     * Function format number
     * @param number 
     * @returns a number
     * CreatedBy: PQ Huy (18.08.2021)
     */
    formatNumber = (number: any) => {
        if (number && !isNaN(number)) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            return number;
        }
    }

    /**
     * Function format date
     * @param {date} dateSrc 
     * @returns date
     * CreatedBy: PQ Huy (08.07.2021)
     */
    formatDate = (dateSrc: any) => {
        if (dateSrc)
            dateSrc = moment(dateSrc).format("DD/MM/YYYY");

        return dateSrc;
    }

    /**
     * Function format names
     * @param {string} name 
     * @returns a name string
     * CreatedBy: PQ Huy (08.07.2021)
     */
    formatName = (name: string) => {
        let fullName = name.split(' '),
            res = '';

        fullName.map(item => {
            item = item.charAt(0).toUpperCase() + item.slice(1);
            res += item + ' ';
        });

        return res.trim();
    }

    /**
     * Function format with enumname
     * @param {string} data 
     * @param {int} enumName 
     * @returns a string
     * CreatedBy: PQ Huy (08.07.2021)
     */
    getEnumValue = (data: any, enumName: any) => {

        let enumeration = Enumeration[enumName],
            resource = Resource[enumName];

        for (let propName in enumeration) {
            if (enumeration[propName] == data) {
                data = resource[propName];
            }
        }

        return data;
    }

    /**
     * Function return 
     * @param {string} data 
     * @param {string} dataType 
     * @param {int} enumName 
     * @returns format date
     * CreatedBy: PQ Huy (08.07.2021)
     */
    formatData = (data: string, dataType: string, enumName: string) => {
        let temp = "";

        if (data != null) {
            temp = data;

            switch (dataType) {
                case Resource.DataTypeColumn.Number:
                    temp = this.formatNumber(temp);
                    break;
                case Resource.DataTypeColumn.Name:
                    temp = this.formatName(temp);
                    break;
                case Resource.DataTypeColumn.Date:
                    temp = this.formatDate(temp);
                    break;
                case Resource.DataTypeColumn.Enum:
                    temp = this.getEnumValue(temp, enumName);
                    break;
            }
        }

        return temp;
    }

    /**
     * Function return table
     * @param {string} lable 
     * @returns lable
     * CreatedBy: PQ Huy (11.07.2021)
     */
    formatLable = (lable: any) => {
        let temp = "";

        if (lable) {
            switch (lable) {
                case Resource.FormatLable.Address:
                    temp = Resource.LableName.Address;
                    break;
                case Resource.FormatLable.BankAccountNumber:
                    temp = Resource.LableName.BankAccountNumber;
                    break;
                case Resource.FormatLable.BankBranchName:
                    temp = Resource.LableName.BankBranchName;
                    break;
                case Resource.FormatLable.BankName:
                    temp = Resource.LableName.BankName;
                    break;
                case Resource.FormatLable.BankProvinceName:
                    temp = Resource.LableName.BankProvinceName;
                    break;
                case Resource.FormatLable.CreatedBy:
                    temp = Resource.LableName.CreatedBy;
                    break;
                case Resource.FormatLable.CreatedDate:
                    temp = Resource.LableName.CreatedDate;
                    break;
                case Resource.FormatLable.DateOfBirth:
                    temp = Resource.LableName.DateOfBirth;
                    break;
                case Resource.FormatLable.DepartmentId:
                    temp = Resource.LableName.DepartmentId;
                    break;
                case Resource.FormatLable.DepartmentName:
                    temp = Resource.LableName.DepartmentName;
                    break;
                case Resource.FormatLable.Email:
                    temp = Resource.LableName.Email;
                    break;
                case Resource.FormatLable.EmployeeCode:
                    temp = Resource.LableName.EmployeeCode;
                    break;
                case Resource.FormatLable.EmployeeId:
                    temp = Resource.LableName.EmployeeId;
                    break;
                case Resource.FormatLable.EmployeeName:
                    temp = Resource.LableName.EmployeeName;
                    break;
                case Resource.FormatLable.EmployeePosition:
                    temp = Resource.LableName.EmployeePosition;
                    break;
                case Resource.FormatLable.Gender:
                    temp = Resource.LableName.Gender;
                    break;
                case Resource.FormatLable.IdentityDate:
                    temp = Resource.LableName.IdentityDate;
                    break;
                case Resource.FormatLable.IdentityNumber:
                    temp = Resource.LableName.IdentityNumber;
                    break;
                case Resource.FormatLable.IdentityPlace:
                    temp = Resource.LableName.IdentityPlace;
                    break;
                case Resource.FormatLable.ModifedBy:
                    temp = Resource.LableName.ModifedBy;
                    break;
                case Resource.FormatLable.ModifedDate:
                    temp = Resource.LableName.ModifedDate;
                    break;
                case Resource.FormatLable.PhoneNumber:
                    temp = Resource.LableName.PhoneNumber;
                    break;
                case Resource.FormatLable.TelephoneNumber:
                    temp = Resource.LableName.TelephoneNumber;
                    break;
            }
        }

        return temp;
    }
}