import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsAppHomePageComponent } from './tickets-app-home-page.component';

describe('TicketsAppHomePageComponent', () => {
  let component: TicketsAppHomePageComponent;
  let fixture: ComponentFixture<TicketsAppHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsAppHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsAppHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
