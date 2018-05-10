import { Component } from '@angular/core';
import { Items } from '../../data/storage';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {

recepes: Items[];

constructor() {
  this.recepes = [
    new Items('samosa', 'very spicy you can choose how much spicy you want', 3, 40, null, null, null),
    new Items('parota', 'very tasty, and you can choose type', 2, 34, null , null, null),
    new Items('bajji', 'very spicy, you can choose how much spicy you want', 5, 30,  null, null, null)
  ];
 }
}
