import { Injectable } from '@angular/core';
import {Card} from './card/card'
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CardsService {

  constructor(public http: Http) {
    console.log('Card Service created.', http);
  }

  getCards()
  {
     var url = "https://api.magicthegathering.io/v1/cards?page=5&pageSize=3";
    // var cards = Array<Card>();
    //  var c = new Array<Card>();
    //  c[0] = new Card();
    //  c[0].name = "Boulder";
     return this.http.get(url)
     .map((responseData) => {
       return responseData.json().cards;
      })
       .map((cardJSON: Array<any>) => {
           let result:Array<Card> = [];
           cardJSON.forEach((card) => {
             console.log(card);
             result.push(
               new Card(card.name)
             );
           });
         return result;
       });
  }

}
