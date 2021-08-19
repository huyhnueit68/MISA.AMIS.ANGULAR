import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropFunctionComponent } from './drop-function.component';

describe('DropFunctionComponent', () => {
  let component: DropFunctionComponent;
  let fixture: ComponentFixture<DropFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
