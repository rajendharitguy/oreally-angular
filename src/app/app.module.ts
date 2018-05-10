import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DishesComponent } from './component/dishes/dishes.component';
import { DishSummaryComponent } from './component/dish-summary/dish-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
