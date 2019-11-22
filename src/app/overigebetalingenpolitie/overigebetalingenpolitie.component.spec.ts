import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverigebetalingenpolitieComponent } from './overigebetalingenpolitie.component';

describe('OverigebetalingenpolitieComponent', () => {
  let component: OverigebetalingenpolitieComponent;
  let fixture: ComponentFixture<OverigebetalingenpolitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverigebetalingenpolitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverigebetalingenpolitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
