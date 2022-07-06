import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductBarComponent } from './product-bar/product-bar.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, ProductBarComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
