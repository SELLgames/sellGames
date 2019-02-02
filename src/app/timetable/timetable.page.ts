import { Component, OnInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { Slides, Content } from '@ionic/angular';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  @ViewChild('slideTitle', { 
    read: Slides 
  }) slideTitle: Slides;
  @ViewChild('slideContent', { 
    read: Slides 
  }) slideContent: Slides;
  
  move(movedSlide: Slides) {
      if (movedSlide == this.slideTitle) {
        //let index = movedSlide.getActiveIndex();
        //console.log(index);
        this.slideContent.slideNext();
      } else {
        this.slideTitle.slideNext();
        //let index = movedSlide.getActiveIndex();
        //console.log(index);
    }
  }
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
  dayChanged() {
    console.log("Day changed");
  }
  
  slideOpts = {
    effect: 'flip',
    initialSlide: 0,
    slidesPerView: 1,
    loop: true
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
  ngOnInit() {

  }

}

