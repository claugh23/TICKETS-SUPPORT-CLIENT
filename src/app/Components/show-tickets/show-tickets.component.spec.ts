import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTicketsComponent } from './show-tickets.component';

describe('ShowTicketsComponent', () => {
  let component: ShowTicketsComponent;
  let fixture: ComponentFixture<ShowTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
