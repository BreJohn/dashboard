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
  // map: google.maps.Map;
  // marker: google.maps.Marker;
  lat: number;
  lng: number;
  // coordinates: google.maps.LatLng;
  // mapOptions: google.maps.MapOptions;

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        // this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        // this.mapOptions = {
        //   center: this.coordinates,
        //   zoom: 8,
        // };
        // this.createMap();
      });
    }
  }

  // createMap() {
  //   this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  //   this.marker = new google.maps.Marker({
  //     position: this.coordinates,
  //     map: this.map,
  //   });
  // }
  toggleCal(): void {
    const calendarState = toggleCalendar(this.hidden);
    this.btnLabel = calendarState.btnLabel;
    this.hidden = calendarState.hidden;
    // if (!this.hidden) {
    //   this.initMap();
    // }
  }
}
