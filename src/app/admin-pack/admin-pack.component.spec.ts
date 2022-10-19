import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackComponent } from './admin-pack.component';

describe('AdminPackComponent', () => {
  let component: AdminPackComponent;
  let fixture: ComponentFixture<AdminPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
