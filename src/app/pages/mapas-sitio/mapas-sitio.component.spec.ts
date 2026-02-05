import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasSitioComponent } from './mapas-sitio.component';

describe('MapasSitioComponent', () => {
  let component: MapasSitioComponent;
  let fixture: ComponentFixture<MapasSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapasSitioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapasSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
