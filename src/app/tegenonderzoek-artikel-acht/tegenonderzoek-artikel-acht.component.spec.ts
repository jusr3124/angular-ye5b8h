import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TegenonderzoekArtikelAchtComponent } from './tegenonderzoek-artikel-acht.component';

describe('TegenonderzoekArtikelAchtComponent', () => {
  let component: TegenonderzoekArtikelAchtComponent;
  let fixture: ComponentFixture<TegenonderzoekArtikelAchtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TegenonderzoekArtikelAchtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TegenonderzoekArtikelAchtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
