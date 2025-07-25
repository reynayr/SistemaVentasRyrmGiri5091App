import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDialog } from './usuarios-dialog';

describe('UsuariosDialog', () => {
  let component: UsuariosDialog;
  let fixture: ComponentFixture<UsuariosDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
