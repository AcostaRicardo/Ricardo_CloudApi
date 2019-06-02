import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  constructor(private http: HttpClient) { }

  GetCards(counter)
  {
    return this.http.get("https://movieapi-241020.appspot.com/api/movies/") 
  }
}
