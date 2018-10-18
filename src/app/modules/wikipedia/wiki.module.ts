import { Http, HttpModule } from '@angular/http';
import { WikiService } from './wiki.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule, HttpModule],
   declarations: []
})
export class WikipediaModule { }
