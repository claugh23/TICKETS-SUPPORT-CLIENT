import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDashTestComponent } from './ticket-dash-test.component';

describe('TicketDashTestComponent', () => {
  let component: TicketDashTestComponent;
  let fixture: ComponentFixture<TicketDashTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketDashTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDashTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
