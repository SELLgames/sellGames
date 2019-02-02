import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  @ViewChild('map') mapRef : ElementRef;
  //map: any;
  constructor() { }

  ionViewDidLoad(){
    this.showMap();
    //console.log(this.mapRef);
  }
  showMap(){
    //latitude longitude
    const location = new google.maps.LatLng(60.98267, 25.66151);
  // Map options
  const options = {
    center:location,
    zoom: 14,
    streetViewControl: false
  }
  
const map = new google.maps.Map(this.mapRef.nativeElement,options);

this.addMarker(location,map)
  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map,
    })
  }
  ngOnInit() {
    this.showMap();
  }

}
