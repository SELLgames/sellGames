import { Component, OnInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { Slides, Content } from '@ionic/angular';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  @ViewChild('slides') sliders: Slides;

  public venueList: Array<{ name: string; content: string; }> = [];
  public dayList: Array<{ date: string }> = [];
  private selectedItem: any;

  private days = [
    'Friday 15th',
    'Saturday 16th',
    'Sunday 17th'
  ];
  private venue = [
    'Venue 1',
    'Venue 2',
    'Venue 3',
    'Venue 4'
  ];
  private detail = [
    'Timetable 1',
    'Timetable 2',
    'Timetable 3',
    'Timetable 4',
  ];

  slideOpts = {
    effect: 'flip',
    initialSlide: 3,
    slidesPerView: 1,
    loop: true,
    control: this.sliders
  };

  constructor() {
    for (let i = 0; i < this.venue.length; i++) {
      this.venueList.push({
        name: this.venue[i],
        content: this.detail[i],
      });
    }
    for (let i = 0; i < this.days.length; i++) {
      this.dayList.push({
        date: this.days[i],
      });
    }
  }
  public move(): void {
    //this.slideTitle.slideNext();
    //this.slideContent.slideNext();
  } 

  ngOnInit() {

  }

}
