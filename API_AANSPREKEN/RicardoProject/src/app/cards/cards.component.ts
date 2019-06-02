import { Component, OnInit } from '@angular/core';
import { MagicService, Card, ICardList } from '../services/magic.service';
import * as _ from "lodash"
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pageCounter : number

  eenKaart : Card
  aCards : ICardList //Lijst met kaarten (5 in totaal)

  constructor(private magicSvc: MagicService) {
    
   }

  ngOnInit() {

    this.pageCounter = 1

    this.magicSvc.GetCards(this.pageCounter).subscribe(cardList => {
      
      this.eenKaart = cardList.cards[0]
      this.aCards = cardList


    })
  }

}