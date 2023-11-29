import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessSquareComponent } from './chess-square.component';

describe('ChessSquareComponent', () => {
  let component: ChessSquareComponent;
  let fixture: ComponentFixture<ChessSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChessSquareComponent]
    });
    fixture = TestBed.createComponent(ChessSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
