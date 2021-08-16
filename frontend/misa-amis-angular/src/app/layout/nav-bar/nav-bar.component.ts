import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() navBarItems: Array<any> = [];

  public crtHover: number = -1;

  constructor() { }

  ngOnInit(): void {
    
  }

  setActiveIcon(c_icon: string, m_router: string, path: string){
      // check current is rounte path match with element path set class active icon
      if(m_router == path)
          return [c_icon+'-active'];
      else
          return [c_icon];
  }

}
