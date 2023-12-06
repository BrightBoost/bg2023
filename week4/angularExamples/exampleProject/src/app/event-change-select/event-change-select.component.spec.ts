import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChangeSelectComponent } from './event-change-select.component';

describe('EventChangeSelectComponent', () => {
  let component: EventChangeSelectComponent;
  let fixture: ComponentFixture<EventChangeSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventChangeSelectComponent]
    });
    fixture = TestBed.createComponent(EventChangeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
