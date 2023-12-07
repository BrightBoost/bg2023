import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LameGameComponent } from './lame-game.component';

describe('LameGameComponent', () => {
  let component: LameGameComponent;
  let fixture: ComponentFixture<LameGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LameGameComponent]
    });
    fixture = TestBed.createComponent(LameGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
