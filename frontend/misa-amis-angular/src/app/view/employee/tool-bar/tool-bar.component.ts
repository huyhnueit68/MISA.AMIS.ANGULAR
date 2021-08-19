import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  public hoverRefresh = false;
  public hoverExcel = false;
  public hoverImport = false;
            
  constructor() { }

  ngOnInit(): void {
  }

  // out put event
  @Output() refreshEvent = new EventEmitter<string>();

  /**
   * Function refresh data
   * CreatedBy: PQ Huy (18.08.2021)
   */
  refreshData() {
    this.refreshEvent.emit('');
  }

  /**
   * Function set unhover btn
   * @param btn_name btn name
   * CreatedBy: PQ Huy (18.08.2021)
   */
  setUnHover(btn_name: string) {
    switch (btn_name) {
        case 'refresh-data':
            this.hoverRefresh = false;
            break;
        case 'export-excel':
            this.hoverExcel = false;
            break;
        case 'import-excel':
            this.hoverImport = false;
            break;
    }
  }

  /**
   * Function set hover btn
   * @param btn_name btn name
   * CreatedBy: PQ Huy (18.08.2021)
   */
  setHover(btn_name: string) {
    switch (btn_name) {
        case 'refresh-data':
            this.hoverRefresh = true;
            break;
        case 'export-excel':
            this.hoverExcel = true;
            break;
        case 'import-excel':
            this.hoverImport = true;
            break;
    }
  }

  /**
   * Function export by api
   * CreatedBy: PQ Huy (18.08.2021)
   */
  exportFormApi() {
    
  }

  /**
   * Function import by api
   * CreatedBy: PQ Huy (18.08.2021)
   */
  importExcel() {
    
  }

  /**
   * Function upload file export
   * CreatedBy: PQ Huy (18.08.2021)
   */
  handleFileUpload() {
    
  }

}
