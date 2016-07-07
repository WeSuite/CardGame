import { Component, OnInit } from '@angular/core';
import {CardsService} from "../cards.service";
import {Card} from "./card";

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  providers: [CardsService]
})
export class CardComponent implements OnInit {

  cards: Array<Card>;
  constructor(cardService: CardsService) {
    this.cards = cardService.getCards();
  }


  ngOnInit() {
  }

}
