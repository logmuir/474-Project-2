import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  baseUri: string;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) {
    this.baseUri = 'http://rhymebrain.com/talk';
    console.log(this.baseUri);
  }

  /*getAllRest(): Observable<Object>{
    const url = this.baseUri + '?function=getRhymes&word=hello'; 
    console.log(url)
    return this.http.get(url).map(wiki => wiki.json());
  }*/
  getAllRest(){
    const url = this.baseUri + '?function=getRhymes&word=hello'; 
    console.log(url);
    return this.http.get<any[]>(url).pipe(map(data => data));
  }
} 