import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import {ToolbarModule} from 'primeng/toolbar';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "cards", component: CardsComponent},
      { path:"", redirectTo: "home", pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
