import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAdminOrganizationComponent } from './dialog-admin-organization.component';

describe('DialogAdminOrganizationComponent', () => {
  let component: DialogAdminOrganizationComponent;
  let fixture: ComponentFixture<DialogAdminOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAdminOrganizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAdminOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
