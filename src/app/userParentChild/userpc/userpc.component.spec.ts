import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpcComponent } from './userpc.component';

describe('UserpcComponent', () => {
  let component: UserpcComponent;
  let fixture: ComponentFixture<UserpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserpcComponent]
    });
    fixture = TestBed.createComponent(UserpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
