import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RhymeService } from './modules/wikipedia/wiki.service';
import { Wiki } from './wiki';
//import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';

  wiki: Wiki[] = [];
  
  constructor(private wikiSvc: RhymeService){}

  ngOnInit() {
    this.wikiSvc
      .getAllRest()
        .subscribe((wikis: Wiki[]) => {
          this.wiki = wikis;
          console.log(this.wiki);
        });
    console.log(this.wikiSvc)
  }

} 
