import { Component, Input, OnInit } from '@angular/core';
import Resource from 'src/app/ts/common/Resource';

@Component({
  selector: 'app-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss', '../../../../view/employee/employee-list/employee-list.component.scss']
})
export class BaseInputComponent implements OnInit {

  @Input() isShow: boolean = false;
  @Input() title: string = '';
  @Input() bindingData: object = {
    default: null
  };
  @Input() Require: boolean = false;
  @Input() Duplicate: boolean = false;
  @Input() Number: boolean = false;

  @Input() BindingInput: any;

  public dataReceive = "";
  public isValid = true;
  public focused = false;
  public Resource = Resource.TitleForm;
  public titleToolTip = '';

  constructor() { }

    ngOnInit(): void {
      debugger
  }

  /**
   * function check length of input 
   * @param {string} targetInput
   * CreatedBy: PQ Huy (06.07.2021)
   */
  applyInputStyle(targetInput: any) { 
      let className = "";
      if(this.isShow) {
          if(targetInput && targetInput.length > 0){
              className = 'success-input';
          }else{
              className = 'error-input';
          }
      }

      return className;
  }

  /**
   * function set action when focused
   * CreatedBy: PQ Huy (07.07.2021)
   */
  focus(event: any) {
      this.focused = true;
      // this.$refs.reInput.select();
  }

  /**
   * Function set validate when blur
   * CreatedBy: PQ Huy (07.07.2021)
   */
  blur(event: any) {
      event.target = false;
      this.validate();
  }

  /**
   * Function validate data
   * CreatedBy: PQ Huy (07.07.2021)
   */
  validate(){
      let value = this.dataReceive,
          isValid = true;

      // validate required
      isValid = this.validateRequired(value);

      // validate type input numbers
      isValid = this.validateFormatNumber(value);

      // // validate type input numbers
      // isValid = this.validateFormatEmail(value);

      return isValid;
  }

  /**
   * Function validate required
   * @param {string} value
   * CreatedBy: PQ Huy (08.07.2021)
   */
  validateRequired(value: any) {
      if (this.BindingInput.Required) {
          if (!value || value.length <= 0) {
              this.isValid = false;
              this.titleToolTip = `${Resource.TitleForm.FullField} ${this.BindingInput.label}`
              return false;
          } else {
              this.isValid = true;
          }
      }
      return true;
  }

  /**
   * Function validate required
   * @param {string} value
   * CreatedBy: PQ Huy (08.07.2021)
   */
  validateFormatNumber(value: any){
      if (this.BindingInput.Number) {
          if(value) {
              if(!value.match(/^-{0,1}\d+$/)) {
                  this.titleToolTip = `${Resource.TitleForm.FormatNumber}`
                  this.isValid = false;
                  return false;
              } else {
                  this.isValid = true;
              }
          }
      }
      return true;
  }

  /**
   * Ppper case full name
   * CreatedBy : PQ Huy (09.07.2021)
   */
  capitalize() {
      try {
          if(this.BindingInput.inputFieldName == 'employeeName') {
              let words = this.dataReceive.split(' '),
                  CapitalizedWords: any = [];

              words.forEach(element => {
                  if(element) {
                      CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
                  } else {
                      CapitalizedWords.push("");
                  }
              });
              this.dataReceive = CapitalizedWords.join(' ');
          }
      } catch(error){
          console.error(error);
      }
  }

  /**
   * Function set focus input
   * CreatedBy: PQ Huy (11.07.2021)
   */
  focusInput(){
      // if(this.BindingInput.inputFieldName == Resource.FormatLable.EmployeeCode)
          // this.$refs.reInput.focus();
  }

  /**
   * Function set tooltip for icon
   * @param {string} title
   * CreatedBy: PQ Huy (16.07.2021)
   */
  optionTooltip(title: string){
      if(!this.isValid){
          return {
              content: title,
              autoHide: false,
              show: false,
              classes: 'tooltip-detail-input'
          }
      }

      return {
          content: '',
          autoHide: false,
          show: false,
          classes: 'tooltip-detail-input'
      }
  }

}
