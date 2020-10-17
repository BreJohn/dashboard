import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { toggleCalendar } from '../../lib/calendarFunctions';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
  selectedDate: Moment;
  hidden = false;
  btnLabel = 'Hide';
  constructor() {}

  ngOnInit(): void {}

  toggleCal(): void {
    const calendarState = toggleCalendar(this.hidden);
    this.btnLabel = calendarState.btnLabel;
    this.hidden = calendarState.hidden;
  }
}
