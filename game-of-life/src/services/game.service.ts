import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private rowCount: number = 30;
  private columnCount: number = 30;
  private cells: boolean[][] = [];
  private generation: number = 0;

  constructor() {
    this.generateInitialCells();
  }

  getCells(): boolean[][] {
    return this.cells;
  }

  getGeneration(): number {
    return this.generation;
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
