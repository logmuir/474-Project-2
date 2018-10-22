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

  //getAllRest(): void {
    //this.wikiSvc.getAllRest()
    //.subscribe((wikis: Wiki[]) => {
         //this.wiki = wikis;
         //console.log(this.wiki);
    //});

  //}


  ngOnInit() {
    this.wikiSvc
      .getAllRest()
        .subscribe((wikis: Wiki[]) => {
          this.wiki = wikis;
          console.log(this.wiki);
        });
  }
}