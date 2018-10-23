import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  baseUri: string;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) {
    this.baseUri = 'http://ws.audioscrobbler.com/2.0';
    console.log(this.baseUri);
  }

  getAllRest(): Observable<Object>{
    const url = this.baseUri + '/?method=chart.gettopartists&api_key=119e39cb330a0f59c3f1616150e3e8f0&format=json&limit='; 
    console.log(url)
    return this.http.get(url).map(wiki => wiki.json());
  }
}