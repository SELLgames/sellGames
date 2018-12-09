import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Slides, Content } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  @ViewChildren(Slides) slides: QueryList<Slides>;

  public venueList: Array<{ name: string; content: string; }> = [];
  public dayList: Array<{ date: string }> = [];
  private selectedItem: any;

  public move(index: number): void {
    this.slides.toArray()[index].slideNext(500);
  } 

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
    effect: 'flip'
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
