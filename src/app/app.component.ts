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
} 
