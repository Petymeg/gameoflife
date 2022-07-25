import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rows: number = 30;
  columns: number = 30;
  cells: boolean[][] = [];

  constructor() {
    this.generateCells();
    console.log(this.cells);
  }

  generateCells(): void {
    for (let i: number = 0; i < this.rows; i++) {
      this.cells.push([]);
      for (let j: number = 0; j < this.rows; j++) {
        this.cells[i][j] = false;
      }
    }
  }

  toggleCell(coordinateY: number, coordinateX: number): void {
    this.cells[coordinateY][coordinateX] =
      !this.cells[coordinateY][coordinateX];
  }
}
