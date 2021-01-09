import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServMDComponent } from './serv-md.component';

describe('ServMDComponent', () => {
  let component: ServMDComponent;
  let fixture: ComponentFixture<ServMDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServMDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
