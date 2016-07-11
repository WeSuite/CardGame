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
  postLoginUser:string;

  constructor(cardService: CardsService) {
    cardService.getCards().subscribe(res => this.cards = res);
    
    cardService.loginUser().subscribe(//call the post
                data => this.postLoginUser = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Login Post !")//run this code in all cases
            );
  }
  ngOnInit() {
  }

}
