import { Injectable } from '@angular/core';

@Injectable()
export class CardsService {

  constructor() {}

  getCards() : string[] { return ["Boulder"];
  }
}
