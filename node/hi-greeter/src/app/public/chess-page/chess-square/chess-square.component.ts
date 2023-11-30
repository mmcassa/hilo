import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChessPieceComponent } from '../chess-piece/chess-piece.component';
import { ChessService } from '../chess.service';

@Component({
  selector: 'app-chess-square',
  templateUrl: './chess-square.component.html',
  styleUrls: ['./chess-square.component.scss']
})
export class ChessSquareComponent implements OnInit {
  @Input() isWhite: boolean = false;
  @Input() position: string = "";
  @Input() highlight: boolean = false;
  // @Output() click: EventEmitter = 

  private piece: ChessPieceComponent | undefined;

  constructor(public gameService: ChessService) {
    
  }

  ngOnInit(): void {
    
  }

}
