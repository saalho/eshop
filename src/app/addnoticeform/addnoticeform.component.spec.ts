import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnoticeformComponent } from './addnoticeform.component';

describe('AddnoticeformComponent', () => {
  let component: AddnoticeformComponent;
  let fixture: ComponentFixture<AddnoticeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnoticeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnoticeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
