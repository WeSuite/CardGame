import { Injectable,Component } from '@angular/core';
import {Card} from './card/card'

@Injectable()
export class CardsService {

  constructor() {}

  getCards()
  {
     var url = "https://api.magicthegathering.io/v1/cards?page=5&pageSize=1";

     var c = new Array<Card>();
     c[0] = new Card();
     c[0].name = "Boulder";
     return c;
  }
}
