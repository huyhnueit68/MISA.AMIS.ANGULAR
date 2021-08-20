import { Component, OnInit } from '@angular/core';
import { EmployeeApi } from 'src/app/api/employee.api';
import { MainService } from 'src/app/Service/common/main.service';
import Enumeration from 'src/app/ts/common/Enumeration';
import Resource from 'src/app/ts/common/Resource';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss', '../employee-list/employee-list.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public dateOfBirth = null
  public isShowDialog = false
  public itemData: any;
  public titlePopup= "Notification"
  public formIconPopup= "icon-notification"
  public isBtnLeft= true
  public isBtnRightFirst= true
  public isBtnRightSecound= true
  public titleLeft= "Hủy"
  public tleRightFirst= "Không"
  public tleRightSecound= "Có"
  public configClass= ""
  public statusForm= Enumeration.PopupMode.Warning
  public isShow= false
  public titleFormClone= ""
  public cloneCode= ""
  public BindingInput: any;
  public cloneDataOrigin = {}
  public cloneData = {}

  constructor(
    private _employeeApi: EmployeeApi,
    public _mainService: MainService) { }

    ngOnInit(): void {
        this.InitInputBase();
    }

  /**
   * Function init base input
   * CreatedBy: PQ Huy (10.07.2021)
   */
  InitInputBase(){
      this.BindingInput = {
          employeeCode: {
              inputFieldName: Resource.FormatLable.EmployeeCode,
              label: Resource.LableInput.EmployeeCode,
              Required: true,
              Duplicate: true,
          },
          employeeName: {
              inputFieldName: Resource.FormatLable.EmployeeName,
              label: Resource.LableInput.EmployeeName,
              Required: true,
              inputType: "text",
          },
          dateOfBirth: {
              inputFieldName: Resource.FormatLable.DateOfBirth,
              label: Resource.LableInput.DateOfBirth,
              inputType: "date",
              dataType: Resource.DataTypeColumn.Date,
          },
          employeePosition: {
              inputFieldName: Resource.FormatLable.EmployeePosition,
              label: Resource.LableInput.EmployeePosition,
              inputType: "text",
          },
          identityNumber: {
              inputFieldName: Resource.FormatLable.IdentityNumber,
              label: Resource.LableInput.IdentityNumber,
              inputType: "text",
              Required: true,
              Number: true
          },
          identityDate: {
              inputFieldName: Resource.FormatLable.IdentityDate,
              label: Resource.LableInput.IdentityDate,
              inputType: "date",
              dataType: Resource.DataTypeColumn.Date,
          },
          identityPlace: {
              inputFieldName: Resource.FormatLable.IdentityPlace,
              label: Resource.LableInput.IdentityPlace,
              inputType: "text",
          },
          address: {
              inputFieldName: Resource.FormatLable.Address,
              label: Resource.LableInput.Address,
              inputType: "text",
          },
          email: {
              inputFieldName: Resource.FormatLable.Email,
              label: Resource.LableInput.Email,
              inputType: "text",
              dataType: "Email",
              Duplicate: true,
          },
          phoneNumber: {
              inputFieldName: Resource.FormatLable.PhoneNumber,
              label: Resource.LableInput.PhoneNumber,
              inputType: "text",
              Number: true
          },
          telephoneNumber: {
              inputFieldName: Resource.FormatLable.TelephoneNumber,
              label: Resource.LableInput.TelephoneNumber,
              inputType: "text",
              Number: true
          },
          bankAccountNumber: {
              inputFieldName: Resource.FormatLable.BankAccountNumber,
              label: Resource.LableInput.BankAccountNumber,
              inputType: "text",
              Number: true
          },
          bankName: {
              inputFieldName: Resource.FormatLable.BankName,
              label: Resource.LableInput.BankName,
              inputType: "text",
          },
          bankBranchName: {
              inputFieldName: Resource.FormatLable.BankBranchName,
              label: Resource.LableInput.BankBranchName,
              inputType: "text",
          },
          department: {
              inputFieldName: Resource.FormatLable.DepartmentId,
              label: Resource.LableInput.DepartmentId,
              Required: true,
          },
      }
  }

  /**
   * function open form detail
   * @param {Object} item
   * @param {String} titleForm
   * CreatedBy: PQ Huy (05.07.2021)
   */
    async OpenDialog(item: any, titleForm: string) {
      debugger
      this.isShowDialog = true;
        this.titleFormClone = titleForm;
        this.itemData = '';
  }

  /**
   * function close form detail
   * CreatedBy: PQ Huy (05.07.2021)
   */
  closeFormDetail(){
      this.isShowDialog = false;
  }

  /**
   * Function access close form from dialog warning
   * CreatedBy: PQ Huy (10.07.2021)
   */
  closeAll(){
      this.isShowDialog = false;
  }

  /**
   * Function compare 2 object changes
   * @param {Object} obj1
   * @param {Object} obj1
   * @returns a true/false
   * CreatedBy: PQ Huy (10.07.2021)
   */
  compareObject(obj1: any, obj2: {}){
      
  }

  /**
   * Set change value data from component
   * @param {string} key
   * @param {string} value
   * CreatedBy: PQ Huy (06.07.2021)
   */
  updateValue(key: any, value: any) {
      
  }

  /**
   * Function reset form
   * CreatedBy: PQ Huy (07.07.2021)
   */
  RefreshForm(){
    
  }
  
  /**
   * Function save data
   * CreatedBy : PQ Huy (06.07.2021)
   */
  async save(saveMode: any){
     
      
  }

  /**
   * function close form detail
   * @param {string} saveMode
   * CreatedBy: PQ Huy (07.07.2021)
   */
  closeAction(saveMode: any){
     
  }

  /**
    * Function inset data
    * CreatedBy: PQ Huy (07.07.2021)
    */
  async Insert(){
      
  }


  /**
    * Function edit data
    * CreatedBy: PQ Huy (07.07.2021)
    */
  async Edit(){
      
  }

  /**
    * Function format data before save
    * CreatedBy: PQ Huy (07.07.2021)
    */
  formatDataSave(){
    
  }

  /**
    * Function validate data
    * CreatedBy: PQ Huy (06.07.2021)
    */
  async validateData(){
    
  }

  /**
    * Function validate format email
    * @param {Object} inputValid
    * CreatedBy: PQ Huy (09.07.2021)
    */
  validateFormat(inputValid: any){
      
  }

  /**
    * Function validate format number
    * @param {Object} inputValid
    * CreatedBy: PQ Huy (11.07.2021)
    */
  validateFormatNumber(inputValid: any){
      
  }

  /**
    * Function validate duplicate code
    * @param {object} inputValidate
    * CreatedBy: PQ Huy (07.07.2021)
    */
  async vaidateDuplicate(inputValidate: any){
    
  }


  /**
    * Function validate required
    * @param {object} inputValidate
    * @return a boolen check validate
    * CreatedBy: PQ Huy (07.07.2021)
    */
  vaidateRequire(inputValidate: any){
      
  }

  /**
    * Result validate input
    * @param {string} state
    * @param {string} message
    * CreatedBy: PQ Huy (07.07.2021)
    */
  resValidInput(state: any, message: any){
      
  }

  /**
    * @param {string} title
    * CreatedBy: PQ Huy (07.07.2021)
    */
  openFormRequire(title: any){
      
  }

  /** Function call popup info
    * @param {string} title
    * CreatedBy: PQ Huy (07.07.2021)
    */
  openFormInfo(title: any){
      
  }

  /** Function call popup warning
    * @param {string} title
    * CreatedBy: PQ Huy (07.07.2021)
    */
  openFormWarning(title: any){
     
  }

  /**
    * Function call popup notification
    * @param {string} icon
    * @param {string} title
    * CreatedBy: PQ Huy (07.07.2021)
    */
  popupNotification(icon: any, title: any){
    
  }

  /**
    * Function set tooltip for icon
    * @param {string} title
    * @return {object} list object setup tooltip
    * CreatedBy: PQ Huy (10.07.2021)
    */
  optionTooltip(title: any){
      
  }

  /**
    * Function set tooltip for icon
    * @param {string} title
    * @return {object} list object setup tooltip
    * CreatedBy: PQ Huy (10.07.2021)
    */
  tooltipBtn(title: any){
      
  }
}
