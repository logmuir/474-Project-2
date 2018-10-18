import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Wiki } from './../../wiki';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  baseUri: string;
  page = 1;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) {
    this.baseUri = 'https://en.wikipedia.org/w/api.php';
    console.log(this.baseUri)
  }

  getAllRest(): Observable<Object>{
    return this.http.get(this.baseUri + '/?action=query&format=json&list=search&utf8=1&srsearch=Nelson%20Mandela')
    .map(response => response.json())}; 
      //{

      // const wiki = response.json(); 
      // return wiki.map((wiki) => new Wiki(wiki));
    // });
  }
  
}
