import { Component, OnInit } from '@angular/core';
import {AppCounterService} from './app-counter.service';
import {environment} from '../../../../../environments/environment';
import event = google.maps.event;

@Component({
  selector: 'ngx-app-counter',
  templateUrl: './app-counter.component.html',
  styleUrls: ['./app-counter.component.scss'],
})

export class AppCounterComponent implements OnInit {

 // answerArray: [{['Hello!', 'Yes?', 'Yes, milord?', 'What can I do for you?'],},];
  answerArray: ['Hello!', 'Yes?', 'Yes, milord?', 'What can I do for you?'];
  isCollapsed: boolean = true;
  constructor(private appCounterService: AppCounterService) {
  }
  ngOnInit() {
  }
  counterg = 0;
  counterb = 0;
  increase() {
    this.counterg++;
    if (this.isCollapsed = false){
      this.isCollapsed = true;
    }
  }
  decrease() {
    this.counterb++;
    if (this.isCollapsed = false){
      this.isCollapsed = true;
    }
  }
  showHide: boolean;
  tex: string = 'Спасибо за отзыв!';
  createCardClick() {
    this.showHide = !this.showHide;
  }
}
