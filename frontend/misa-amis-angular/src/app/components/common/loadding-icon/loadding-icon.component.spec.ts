import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaddingIconComponent } from './loadding-icon.component';

describe('LoaddingIconComponent', () => {
  let component: LoaddingIconComponent;
  let fixture: ComponentFixture<LoaddingIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaddingIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaddingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
