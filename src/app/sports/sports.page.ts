import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  
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