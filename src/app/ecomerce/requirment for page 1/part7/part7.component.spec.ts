import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part7Component } from './part7.component';

describe('Part7Component', () => {
  let component: Part7Component;
  let fixture: ComponentFixture<Part7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Part7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
