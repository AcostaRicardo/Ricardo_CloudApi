import { Component, OnInit } from '@angular/core';
import { MagicService } from '../services/magic.service';
import * as _ from "lodash"
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  photoUrl : string

  constructor(private magicSvc: MagicService) {
    
   }

  ngOnInit() {
    this.magicSvc.GetCards().subscribe(cardList => {
      let index = _.random(0,cardList.cards.length - 1)
      this.photoUrl = cardList.cards[index].imageUrl

    })
  }

}
