import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEmprendedorComponent } from './plan-emprendedor.component';

describe('PlanEmprendedorComponent', () => {
  let component: PlanEmprendedorComponent;
  let fixture: ComponentFixture<PlanEmprendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanEmprendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEmprendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
