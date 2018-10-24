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
export class RhymeService {
  baseUri: string;
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) {
    this.baseUri = 'http://rhymebrain.com/talk';
  }

  /*getAllRest(): Observable<Object>{
    const url = this.baseUri + '?function=getRhymes&word=hello'; 
    return this.http.get(url).map(rhyme => rhyme.json());
  }*/
  getAllRest(word : string){
    const url = this.baseUri + '?function=getRhymes&word=' + word; 
    return this.http.get<any[]>(url).pipe(map(data => data));
  }
} 