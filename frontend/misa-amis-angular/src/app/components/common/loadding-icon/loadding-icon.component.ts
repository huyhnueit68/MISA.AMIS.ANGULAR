import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/common/main.service';

@Component({
  selector: 'app-loadding-icon',
  templateUrl: './loadding-icon.component.html',
  styleUrls: ['./loadding-icon.component.scss']
})
export class LoaddingIconComponent implements OnInit {


  constructor(public _mainService: MainService) { }

  ngOnInit(): void {
  }

  /**
   * Function set loading
   * @param value boolen
   * CreatedBy: PQ Huy (19.08.2021)
   */
  setLoading(value: boolean) {
  }

}
