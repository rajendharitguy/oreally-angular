import { Component } from '@angular/core';
import { Items } from './data/storage';

@Component({
  selector: 'app-initial',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
recepe: Items;

constructor() {
  this.recepe = new Items('samosa', 'very spicy, you can choose how much spicy you want', null, null, null);
 }
}
