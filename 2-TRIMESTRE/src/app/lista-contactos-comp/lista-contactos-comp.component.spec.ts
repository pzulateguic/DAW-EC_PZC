import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContactosCompComponent } from './lista-contactos-comp.component';

describe('ListaContactosCompComponent', () => {
  let component: ListaContactosCompComponent;
  let fixture: ComponentFixture<ListaContactosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContactosCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContactosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
