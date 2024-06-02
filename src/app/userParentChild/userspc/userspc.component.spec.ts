import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspcComponent } from './userspc.component';

describe('UserspcComponent', () => {
  let component: UserspcComponent;
  let fixture: ComponentFixture<UserspcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserspcComponent]
    });
    fixture = TestBed.createComponent(UserspcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
