import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
})
export class GridCellComponent implements OnInit {
  @Input() coordinateY: number = 0;
  @Input() coordinateX: number = 0;
  @Input() value: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
