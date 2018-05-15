import { Component } from '@angular/core';
import { Items } from '../../data/storage';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {

recepes: Items[];

recepe_in_progress: Items;

colorChange: boolean;

constructor() {
 this.colorChange = false;
  this.recepe_in_progress = Items.createBlank();
  this.recepes = [
    new Items('samosa', 'very spicy you can choose how much spicy you want', 3, 40, null, null, null),
    new Items('parota', 'very tasty, and you can choose type', 2, 34, null , null, null),
    new Items('bajji', 'very spicy, you can choose how much spicy you want', 5, 30,  null, null, null)
  ];
 }

 public addRecepe() {
   console.log(JSON.stringify(this.recepe_in_progress));
   this.recepes.unshift(this.recepe_in_progress);
   this.recepe_in_progress = Items.createBlank();
 }

 public getRecepe(recepe) {
   console.log('recepe been clicked');
   alert(JSON.stringify(recepe, null, 2));
 }

 public changeClass() {
   this.colorChange = !this.colorChange;
 }
}
