import { Component, OnInit } from '@angular/core';
import { RhymeService } from './../../modules/Rhyme/rhyme.service';
import { Rhyme } from './../../rhyme';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RhymeService]
})
export class HomeComponent implements OnInit {
  
  //rhyme: Rhyme[] = [];
  rhymes: any;
  word: string = 'base'; 

  constructor(private rhymeService: RhymeService){}


  ngOnInit() {
    this.getRhymes()
  }

  getRhymes() {
    this.rhymeService
    .getAllRest(this.word)
      .subscribe(rhymes => {
        console.log(rhymes);
        this.rhymes = rhymes;
      });
  }

  onSelect(rhyme: Rhyme): void{
  }

  onButtonClick(stringToSearchFor: string): void {
    this.word = stringToSearchFor;
    this.getRhymes();
    console.log(stringToSearchFor)
  }

} 