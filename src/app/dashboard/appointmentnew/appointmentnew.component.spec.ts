import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentnewComponent } from './appointmentnew.component';

describe('AppointmentnewComponent', () => {
  let component: AppointmentnewComponent;
  let fixture: ComponentFixture<AppointmentnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
