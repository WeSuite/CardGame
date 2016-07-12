import { Injectable } from '@angular/core';
import {Card} from './card/card'
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class CardsService {

  private actionUrl: string;
  private headers: Headers;
  private options: RequestOptions;

  constructor(public http: Http) {
    console.log('Card Service created.', http);

    this.actionUrl = 'http://wesuite.biz:81/Opportunityapi/json/UserLogin';
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers, method: "post" });
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

  loginUser()
  {
    var userData = {username: 'jack', password: 'jack'};
    console.log("start ws api");
     let toAdd = JSON.stringify(userData);
    return this.http.post(this.actionUrl, toAdd, this.options)
            .map(res => res.json())
            .catch(this.handleError);
    //console.log("end ws api");
  }

  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
