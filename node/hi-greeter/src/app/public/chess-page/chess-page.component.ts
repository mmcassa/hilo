import { Component } from '@angular/core';
import { ChessService } from './chess.service';

@Component({
  selector: 'app-chess-page',
  templateUrl: './chess-page.component.html',
  styleUrls: ['./chess-page.component.scss']
})

export class ChessPageComponent {
  isGameActive: boolean = false;

  constructor(private gameService: ChessService) {

  }

  private setSquareSize() {
    
  }
  
}
