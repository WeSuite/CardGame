/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CardsService } from './cards.service';

describe('Cards Service', () => {
  beforeEachProviders(() => [CardsService]);

  it('should ...',
      inject([CardsService], (service: CardsService) => {
    expect(service).toBeTruthy();
  }));
});
