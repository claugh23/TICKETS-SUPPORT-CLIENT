import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTicketsComponent } from './completed-tickets.component';

describe('CompletedTicketsComponent', () => {
  let component: CompletedTicketsComponent;
  let fixture: ComponentFixture<CompletedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
