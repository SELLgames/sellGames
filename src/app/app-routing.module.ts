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
    path: 'Timetable', 
    loadChildren: './timetable/timetable.module#TimetablePageModule' 
  },
  { 
    path: 'Sports', 
    loadChildren: './sports/sports.module#SportsPageModule' 
  },
  { 
    path: 'Map', 
    loadChildren: './map/map.module#MapPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
