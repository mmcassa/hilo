import { Injectable } from '@angular/core';
import { ChessPieceComponent } from './chess-piece/chess-piece.component';
import { ChessSquareComponent } from './chess-square/chess-square.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChessService {
  private defaultWhiteColor = "#FFFFFF";
  private defaultBlackColor = "#000000";
  private awaitingMove = false;
  
  whiteColor = "#e6e6e6";
  blackColor = "#171717";
  

  private pieceMap: BehaviorSubject<ChessPieceComponent[][]> = new BehaviorSubject(Array(8).fill(Array(8).fill(null)));

  constructor() { 
    

  }

  private fetchGameBoard() {

  }

  private initializeGameBoard() {

  }

  /**
   * Polls backend for a move and then updates the board
   */
  private awaitNextMove() {

  }

  private updateBoard() {

  }

  public getValidMoves(position: string): string[] {
    return []
  }

  public movePiece(startPosition: string, endPosition: string): boolean {
    return true;
  }

  public get board(): Observable<any> {
    return this.pieceMap.asObservable();
  }

  public getPieceInSquare(): ChessPieceComponent {
    return new ChessPieceComponent();
  }
}
