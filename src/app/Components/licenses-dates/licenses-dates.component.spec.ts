import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesDatesComponent } from './licenses-dates.component';

describe('LicensesDatesComponent', () => {
  let component: LicensesDatesComponent;
  let fixture: ComponentFixture<LicensesDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensesDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensesDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
