import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'timetable', 
    loadChildren: './timetable/timetable.module#TimetablePageModule' 
  },
  { 
    path: 'sports', 
    loadChildren: './sports/sports.module#SportsPageModule' 
  },
  { 
    path: 'map', 
    loadChildren: './map/map.module#MapPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
