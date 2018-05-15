import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Items } from '../../data/storage';
@Component({
  selector: 'app-dish-summary',
  templateUrl: './dish-summary.component.html',
  styleUrls: ['./dish-summary.component.css']
})
export class DishSummaryComponent {
  @Input()
  recepe: Items;

  @Output()
 zoomIn: EventEmitter<Items> = new EventEmitter();

  constructor() { }

  public zoomRecepe() {
    this.zoomIn.emit(this.recepe);
  }
}
