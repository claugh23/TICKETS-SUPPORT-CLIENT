import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsModuleComponent } from './tickets-module.component';

describe('TicketsModuleComponent', () => {
  let component: TicketsModuleComponent;
  let fixture: ComponentFixture<TicketsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
