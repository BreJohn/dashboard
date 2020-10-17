import { Component, ElementRef, ViewChild } from '@angular/core';

import { toggleCalendar } from '../../lib/calendarFunctions';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
})
export class MapComponent {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  hidden = false;
  btnLabel = 'Hide';
  lat: number;
  lng: number;

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  toggleCal(): void {
    const calendarState = toggleCalendar(this.hidden);
    this.btnLabel = calendarState.btnLabel;
    this.hidden = calendarState.hidden;
  }
}
