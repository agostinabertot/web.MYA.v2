import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCMIComponent } from './serv-cmi.component';

describe('ServCMIComponent', () => {
  let component: ServCMIComponent;
  let fixture: ComponentFixture<ServCMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServCMIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServCMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
