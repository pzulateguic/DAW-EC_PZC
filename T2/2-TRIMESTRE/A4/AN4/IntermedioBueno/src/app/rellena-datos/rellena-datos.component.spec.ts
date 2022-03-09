import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RellenaDatosComponent } from './rellena-datos.component';

describe('RellenaDatosComponent', () => {
  let component: RellenaDatosComponent;
  let fixture: ComponentFixture<RellenaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RellenaDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RellenaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
