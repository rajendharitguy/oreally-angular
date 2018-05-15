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

  colorChange: any;
  i: any;
  font_size: any;
  constructor() {
    this.i = 1;
    this.font_size = { 'font-size': '100%' };
    this.colorChange = { addclass: false };
    this.recepe_in_progress = Items.createBlank();

    this.recepes = [
      new Items('samosa', 'very spicy you can choose how much spicy you want', 3, 40, null, null, null),
      new Items('parota', 'very tasty, and you can choose type', 2, 34, null, null, null),
      new Items('bajji', 'very spicy, you can choose how much spicy you want', 5, 30, null, null, null)
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
    const newva = !this.colorChange['addclass'];
    this.colorChange = { 'addclass': newva };
  }

  public changefont() {
    if (this.font_size['font-size'] === '100%') { this.font_size['font-size'] = '150%'; } else { this.font_size['font-size'] = '190%'; }
  }
}
