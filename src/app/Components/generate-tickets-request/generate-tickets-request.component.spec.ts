import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTicketsRequestComponent } from './generate-tickets-request.component';

describe('GenerateTicketsRequestComponent', () => {
  let component: GenerateTicketsRequestComponent;
  let fixture: ComponentFixture<GenerateTicketsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTicketsRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTicketsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
