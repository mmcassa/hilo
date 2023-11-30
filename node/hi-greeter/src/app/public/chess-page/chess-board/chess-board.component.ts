import { Component, OnInit } from '@angular/core';
import { ChessService } from '../chess.service';
import { ChessSquareComponent } from '../chess-square/chess-square.component';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {

  squares: any = []
  constructor(public gameService: ChessService) {
     let r = 0;
     let c = 0;
     while (r < 8) {
      
      this.squares.push([]);
      while (c < 8) {
        this.squares[r].push({
          row: r,
          column: c,
          position: String.fromCharCode(97+r) + String.fromCharCode(49+c)
        })
        // let tmp = new ChessSquareComponent(gameService);
        // tmp.isWhite = r % 2 == c % 2;
        // tmp.position = String.fromCharCode(97+r) + String.fromCharCode(49+c)
        // this.squares[r].push(tmp);
        c = c + 1;
      }
      c = 0;
      r = r + 1;
     }
  }
  ngOnInit(): void {
    
  }
  

  
}
