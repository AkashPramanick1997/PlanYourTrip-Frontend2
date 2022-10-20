import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookingUpdateComponent } from './dialog-booking-update.component';

describe('DialogBookingUpdateComponent', () => {
  let component: DialogBookingUpdateComponent;
  let fixture: ComponentFixture<DialogBookingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBookingUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBookingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
