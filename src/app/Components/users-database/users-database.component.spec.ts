import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDatabaseComponent } from './users-database.component';

describe('UsersDatabaseComponent', () => {
  let component: UsersDatabaseComponent;
  let fixture: ComponentFixture<UsersDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
