import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClinicComponent } from './manage-clinic.component';

describe('ManageClinicComponent', () => {
  let component: ManageClinicComponent;
  let fixture: ComponentFixture<ManageClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
