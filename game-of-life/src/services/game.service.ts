import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private rowCount: number = 30;
  private columnCount: number = 30;
  private cells: boolean[][] = [];
  private generation: number = 0;
  private initialState: boolean[][] = [];

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

  nextGeneration(): void {
    if (this.generation === 0) this.initialState = [...this.cells];
    this.generation++;
    this.cells = this.cells.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        const liveNeighbors = this.countLiveNeighbors(rowIndex, cellIndex);
        if (cell) {
          if (liveNeighbors < 2) return !cell;
          if (liveNeighbors > 3) return !cell;
        }

        if (!cell && liveNeighbors === 3) return !cell;

        return cell;
      })
    );
  }

  countLiveNeighbors(rowIndex: number, cellIndex: number): number {
    const neighborCellIndexOffsets: number[][] = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let liveNeighbors: number = 0;

    neighborCellIndexOffsets.forEach((offset) => {
      if (
        this.cells[rowIndex + offset[0]] &&
        this.cells[rowIndex + offset[0]][cellIndex + offset[1]]
      )
        liveNeighbors++;
    });

    return liveNeighbors;
  }

  reset(): void {
    this.generation = 0;
    this.cells = [...this.initialState];
  }
}
