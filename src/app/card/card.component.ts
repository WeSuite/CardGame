import { Component, OnInit } from '@angular/core';
import {CardsService} from "../cards.service";

@Component({
  moduleId: module.id,
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  providers: [CardsService]
})
export class CardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
