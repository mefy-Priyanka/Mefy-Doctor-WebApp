import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseBillComponent } from './raise-bill.component';

describe('RaiseBillComponent', () => {
  let component: RaiseBillComponent;
  let fixture: ComponentFixture<RaiseBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
