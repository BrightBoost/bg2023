import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateSelectComponent } from './populate-select.component';

describe('PopulateSelectComponent', () => {
  let component: PopulateSelectComponent;
  let fixture: ComponentFixture<PopulateSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopulateSelectComponent]
    });
    fixture = TestBed.createComponent(PopulateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
