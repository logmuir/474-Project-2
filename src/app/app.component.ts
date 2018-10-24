import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RhymeService } from './modules/Rhyme/rhyme.service';
import { Rhyme } from './rhyme';
//import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';

  rhyme: Rhyme[] = [];
  
  constructor(private rhymeService: RhymeService){}

  ngOnInit() {
    this.rhymeService
      .getAllRest()
        .subscribe((rhymes: Rhyme[]) => {
          this.rhyme = rhymes;
          console.log(this.rhyme);
        });
    console.log(this.rhymeService)
  }

} 
