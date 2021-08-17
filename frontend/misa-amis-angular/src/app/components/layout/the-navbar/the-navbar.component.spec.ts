import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNavbarComponent } from './the-navbar.component';

describe('TheNavbarComponent', () => {
  let component: TheNavbarComponent;
  let fixture: ComponentFixture<TheNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
