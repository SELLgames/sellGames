import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  //@ViewChild('mylbl') ;

  favorited: boolean = true;
  private selectedItem: any;
  private icons = [
    'football',
    'basketball',
    'american-football',
    'baseball',
    'medal',
    'podium'
  ];
  private sports = [
    'Football',
    'Basketball',
    'Orienteering',
    'Weightlifting',
    'Judo',
    'Ski jumping'
  ];

  sortChanged(): void {
    console.log("Sort changed");
  }

  toggleFavorite(index:number): void {
    this.favorited = !this.favorited;
    console.log("Favorited a sport " + index);
  }

  public sportList: Array<{ sport: string; icon: string; url: string }> = [];
  constructor() {
    for (let i = 0; i < this.sports.length; i++) {
      this.sportList.push({
        sport: this.sports[i],
        icon: this.icons[i],
        url: '/sport'
      });
    }
  }
  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}