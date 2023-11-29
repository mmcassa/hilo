import { Component, Input, OnInit } from '@angular/core';
import { ChessPieceComponent } from '../chess-piece/chess-piece.component';

@Component({
  selector: 'app-chess-square',
  templateUrl: './chess-square.component.html',
  styleUrls: ['./chess-square.component.scss']
})
export class ChessSquareComponent implements OnInit {
  @Input() squareColor: string = "#0000000";
  @Input() piece: ChessPieceComponent | undefined;
  @Input() highlight: boolean = false;



  ngOnInit(): void {
    let colorRegex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";
    let regex = new RegExp(colorRegex);

    if (! regex.test(this.squareColor)) {
      // If user inputs an invalid hex color, set to default
      this.squareColor = "#000000";
    }

    

    
  }

}
