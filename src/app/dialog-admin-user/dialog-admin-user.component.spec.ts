import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdminUserComponent } from './dialog-admin-user.component';

describe('DialogAdminUserComponent', () => {
  let component: DialogAdminUserComponent;
  let fixture: ComponentFixture<DialogAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdminUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
