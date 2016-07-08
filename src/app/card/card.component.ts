import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {CardsService} from "../cards.service";
import {Card} from "./card";

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  providers: [CardsService],
  directives: [CORE_DIRECTIVES],
  bindings: [CardsService]
})
export class CardComponent implements OnInit {

  cards: Array<Card>;
  constructor(cardService: CardsService) {
    cardService.getCards().subscribe(res => this.cards = res);
  }
  ngOnInit() {
  }

}
