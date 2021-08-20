import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() addEmployee = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  addNew() {
    // add new employee
    this.addEmployee.emit();
  }

}
