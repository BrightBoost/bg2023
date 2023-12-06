import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExplainedComponent } from './binding-explained.component';

describe('BindingExplainedComponent', () => {
  let component: BindingExplainedComponent;
  let fixture: ComponentFixture<BindingExplainedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingExplainedComponent]
    });
    fixture = TestBed.createComponent(BindingExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
