import { Component, OnInit } from '@angular/core';
import { RhymeService } from './../../modules/Rhyme/rhyme.service';
import { Rhyme } from './../../rhyme';
import 'rxjs/Rx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
