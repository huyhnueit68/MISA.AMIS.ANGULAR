import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMainComponent } from './the-main.component';

describe('TheMainComponent', () => {
  let component: TheMainComponent;
  let fixture: ComponentFixture<TheMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
