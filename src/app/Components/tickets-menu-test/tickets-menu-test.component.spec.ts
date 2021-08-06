import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsMenuTestComponent } from './tickets-menu-test.component';

describe('TicketsMenuTestComponent', () => {
  let component: TicketsMenuTestComponent;
  let fixture: ComponentFixture<TicketsMenuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsMenuTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsMenuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
