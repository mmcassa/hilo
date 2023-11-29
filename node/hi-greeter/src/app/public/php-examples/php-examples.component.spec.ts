import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpExamplesComponent } from './php-examples.component';

describe('PhpExamplesComponent', () => {
  let component: PhpExamplesComponent;
  let fixture: ComponentFixture<PhpExamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhpExamplesComponent]
    });
    fixture = TestBed.createComponent(PhpExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
