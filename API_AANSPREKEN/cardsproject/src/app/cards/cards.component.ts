import { Component, OnInit } from '@angular/core';
//import * as Magic from "mtgsdk-ts"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { 
    
  }
  
  ngOnInit() {

    //console.log(Magic.Cards.where({name:"Nicol"}));

  }

  

}
