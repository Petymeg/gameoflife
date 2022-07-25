import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  rowCount: number = 30;
  columnCount: number = 30;
  cells: boolean[][] = [];

  constructor() {
    this.generateInitialCells();
  }

  generateInitialCells(): void {
    for (let i: number = 0; i < this.rowCount; i++) {
      this.cells.push([]);
      for (let j: number = 0; j < this.columnCount; j++) {
        this.cells[i][j] = false;
      }
    }
  }

  toggleCell(coordinateY: number, coordinateX: number): void {
    this.cells[coordinateY][coordinateX] =
      !this.cells[coordinateY][coordinateX];
  }
}
