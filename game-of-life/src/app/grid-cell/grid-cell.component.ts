import { Component, Input } from '@angular/core';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
})
export class GridCellComponent {
  @Input() coordinateY: number = 0;
  @Input() coordinateX: number = 0;
  @Input() value: boolean = false;

  constructor(private gameService: GameService) {}

  toggleCell(): void {
    if (this.gameService.getGeneration() === 0)
      this.gameService.toggleCell(this.coordinateY, this.coordinateX);
  }
}
