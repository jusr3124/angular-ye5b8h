import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisumaanvragenComponent } from './visumaanvragen.component';

describe('VisumaanvragenComponent', () => {
  let component: VisumaanvragenComponent;
  let fixture: ComponentFixture<VisumaanvragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisumaanvragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisumaanvragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
