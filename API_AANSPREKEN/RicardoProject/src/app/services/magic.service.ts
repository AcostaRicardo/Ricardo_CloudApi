import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) { }

  GetCards()
  {
    return this.http.get<ICardList>("https://api.magicthegathering.io/v1/cards")
  }
}

export interface Ruling {
  date: string;
  text: string;
}

export interface ForeignName {
  name: string;
  text: string;
  flavor: string;
  imageUrl: string;
  language: string;
  multiverseid: number;
}

export interface Legality {
  format: string;
  legality: string;
}

export interface Card {
  name: string;
  manaCost: string;
  cmc: number;
  colors: string[];
  colorIdentity: string[];
  type: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  rarity: string;
  set: string;
  setName: string;
  text: string;
  artist: string;
  number: string;
  layout: string;
  multiverseid: number;
  imageUrl: string;
  rulings: Ruling[];
  foreignNames: ForeignName[];
  printings: string[];
  originalText: string;
  originalType: string;
  legalities: Legality[];
  id: string;
  flavor: string;
  power: string;
  toughness: string;
  variations: string[];
}

export interface ICardList {
  cards: Card[];
}
