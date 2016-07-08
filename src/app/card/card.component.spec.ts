/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {CardsService} from "../cards.service";
import {Http} from "@angular/http";


import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('Component: Card', () => {
  it('should create an instance', () => {
    let http = new Http(null,null);
    let service = new CardsService(http);
    let component = new CardComponent(service);
    expect(component).toBeTruthy();
  });
});
