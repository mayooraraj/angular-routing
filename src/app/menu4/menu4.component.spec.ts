import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu4Component } from './menu4.component';

describe('Menu4Component', () => {
  let component: Menu4Component;
  let fixture: ComponentFixture<Menu4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Menu4Component]
    });
    fixture = TestBed.createComponent(Menu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
