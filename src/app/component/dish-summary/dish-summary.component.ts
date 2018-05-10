import { Component, Input } from '@angular/core';
import { Items } from '../../data/storage';
@Component({
  selector: 'app-dish-summary',
  templateUrl: './dish-summary.component.html',
  styleUrls: ['./dish-summary.component.css']
})
export class DishSummaryComponent {
  @Input()
  recepe: Items;

  constructor() { }

}
