import { Component, OnInit } from '@angular/core';
import { WikiService } from './../../modules/wikipedia/wiki.service';
import { HttpClient } from '@angular/common/http';
import { Wiki } from './../../wiki';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WikiService]
})
export class HomeComponent implements OnInit {
  
  wiki: Wiki[] = [];

  constructor(private wikiSvc: WikiService){}

  ngOnInit() {
    this.wikiSvc
      .getAllRest()
        .subscribe(
          (wiki) => { 
            this.wiki = wiki;}
    )
  }

}