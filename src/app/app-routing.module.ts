import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TodaypageComponent } from './todaypage/todaypage.component';
import { BookmarkpageComponent } from './bookmarkpage/bookmarkpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent
  },
  {
    path: 'loginpage',
    component: LoginpageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'todaypage',
    component: TodaypageComponent
  },
  {
    path: 'bookmarkpage',
    component: BookmarkpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
