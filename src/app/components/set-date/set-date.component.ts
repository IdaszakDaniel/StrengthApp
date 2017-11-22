import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-date',
  templateUrl: './set-date.component.html',
  styleUrls: ['./set-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SetDateComponent implements OnInit {

  constructor() { }

  currentDate: Date = moment().format('LL');
  todayDate: date = moment().format('LL');
  tommorowDate: date = moment().add(1, 'days').format('LL');
  yesterdayDate: date = moment().add(-1, 'days').format('LL');
  date: any;
  NextDay: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.date = this.setDate();
  }

  nextDate(x){
    this.currentDate = moment(this.currentDate).add(x, 'days').format('LL');
    this.date = this.setDate();
    this.NextDay.emit();
  }

  setDate(){
    if(this.currentDate == this.todayDate) return "Today";
    if(this.currentDate == this.tommorowDate) return "Tommorow";
    if(this.currentDate == this.yesterdayDate) return "Yesterday";
    return this.currentDate;
  }

  getCurrentDate(){
    return this.date;
  }

}
