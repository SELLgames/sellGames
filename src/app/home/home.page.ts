import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{ 
 
  tabs: Array<{key:string, content:any}>=[
    {key:'News', content: "asdasdasdasdvdghhgfdssd"},
    {key:'Feed', content:"sagsdghhkjhgfdsadfghjkhgfdsghjgf"}
  ];
  activeTab:string="News";
  switchTab(index:number){
    this.activeTab=this.tabs[index].key;
  }

  
}
