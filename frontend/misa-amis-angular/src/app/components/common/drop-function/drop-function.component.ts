import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-function',
  templateUrl: './drop-function.component.html',
  styleUrls: ['./drop-function.component.scss']
})
export class DropFunctionComponent implements OnInit {

  @Output() setIndexImportant = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<string>();
  @Output() copyEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<string>();

  public isShow = false;
  public isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Function opent drop down 
   * CreatedBy: PQ Huy (08.07.2021)
   */
  openDrop(){
    this.isShow = !this.isShow;
    this.isActive = !this.isActive;
    this.setIndexImportant.emit();
    
  }

  /**
   * Function close drop down
   * CreatedBy: PQ Huy (06.05.2021)
   */
  closeDrop(){
      this.setIndexImportant.emit();
      this.isShow = false;
      this.isActive = false;
  }

  /**
   * Function edit item
   * CreatedBy: PQ Huy (08.07.2021)
   */
  editItem(){
      this.editEvent.emit();
  }

  /**
   * Function copy record
   * CreatedBy: PQ Huy (08.07.2021)
   */
  copyRecord(){
      this.copyEvent.emit();
  }

  /**
   * Function delete recore
   * CreatedBy: PQ Huy (08.07.2021)
   */
  deleteRecord(){
      this.deleteEvent.emit();
  }

  /**
   * Function set active border
   * CreatedBy: PQ Huy (08.07.2021)
   */
  setActiveBorder(){
      this.isActive = true;    
  }

}
