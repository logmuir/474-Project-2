import { Component, OnInit } from '@angular/core';
import { WikiService } from './../../modules/wikipedia/wiki.service';
import { Wiki } from './../../wiki';
import 'rxjs/Rx';

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
        .subscribe((wikis: Wiki[]) => {
          this.wiki = wikis;
          console.log(this.wiki);
        });
    console.log(this.wikiSvc)
  }

  selectedWiki: Wiki;
  onSelect(wiki: Wiki): void{
    this.selectedWiki = wiki;
  }

} 