import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessPageComponent } from './chess-page.component';

describe('ChessPageComponent', () => {
  let component: ChessPageComponent;
  let fixture: ComponentFixture<ChessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChessPageComponent]
    });
    fixture = TestBed.createComponent(ChessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
