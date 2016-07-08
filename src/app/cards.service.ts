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
     var url = "https://api.magicthegathering.io/v1/cards?page=5&pageSize=1";

    //  var c = new Array<Card>();
    //  c[0] = new Card();
    //  c[0].name = "Boulder";
     return this.http.get(url)
     .map((responseData) => {
       console.log(responseData);
       return responseData.json();
      })
       .map((cards: Array<any>) => {
         let result:Array<Card> = [];
         if(cards){
             console.log(cards);
           for (var i = 0; i <= 1; i++){
              //console.log();
             result.push(
               new Card(cards[0].name)
             );
           };
          }

         return result;
       });
  }

}
