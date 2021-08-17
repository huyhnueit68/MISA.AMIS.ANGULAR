import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Service/common/main.service';

@Component({
  selector: 'app-the-navbar',
  templateUrl: './the-navbar.component.html',
  styleUrls: ['./the-navbar.component.scss', '../../../app.component.scss']
})
export class TheNavbarComponent implements OnInit {

  // List navbar item
  @Input() navBarItems: Array<any> = [];

  // hover index
  public crtHover: number = -1;

  /**
   * 
   * @param _router 
   * @param _mainService 
   */
  constructor(private _router: Router, public _mainService: MainService) {
  }

  ngOnInit(): void {
    
  }

  /**
   * Function set active icon
   * @param c_icon name icon
   * @param m_router name router
   * @param path path
   * @returns set icon name
   * CreatedBy: PQ Huy (17.08.2021)
   */
  setActiveIcon(c_icon: string, m_router: string, path: string) {
      // check current is rounte path match with element path set class active icon
      if(m_router == path)
          return [c_icon+'-active'];
      else
          return [c_icon];
  }
  
  /**
   * function set hover
   * @param index index of menu item
   * CreateBy: PQ Huy(17.08.2021)
   */
  setHover(index: number) {
      this.crtHover = index;
  }

  /**
   * Function set unhover
   * @param e event
   * CreatedBy: PQ Huy(17.08.2021)
   */
  setUnHover(e: any) {
    e.target.classList.remove('navbar-item-hover'); // To Remove
  }

}
