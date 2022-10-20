import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdminPackComponent } from './dialog-admin-pack.component';

describe('DialogAdminPackComponent', () => {
  let component: DialogAdminPackComponent;
  let fixture: ComponentFixture<DialogAdminPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdminPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdminPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
