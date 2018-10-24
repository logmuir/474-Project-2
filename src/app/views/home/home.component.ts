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
  
  public show:boolean = false;
  public buttonName:any = 'Show';
  rhymes: any;
  word: string = ''; 

  p: number = 1;

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
    this.show = true;
    this.getRhymes();
    console.log(stringToSearchFor)
  }

} 