import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsLandingPageComponent } from './tickets-landing-page.component';

describe('TicketsLandingPageComponent', () => {
  let component: TicketsLandingPageComponent;
  let fixture: ComponentFixture<TicketsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
