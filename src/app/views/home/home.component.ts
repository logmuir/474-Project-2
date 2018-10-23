import { Component, OnInit } from '@angular/core';
import { RhymeService } from './../../modules/wikipedia/wiki.service';
import { Wiki } from './../../wiki';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RhymeService]
})
export class HomeComponent implements OnInit {
  
  //wiki: Wiki[] = [];
  wikis: any; 

  constructor(private wikiSvc: RhymeService){}


  ngOnInit() {
    this.wikiSvc
      .getAllRest()
        .subscribe(wikis => {
          this.wikis = wikis;
          console.log(this.wikis);
        });
    console.log(this.wikiSvc)
  }

  selectedWiki: Wiki;
  onSelect(wiki: Wiki): void{
    this.selectedWiki = wiki;
  }

} 