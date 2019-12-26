import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todaypage',
  templateUrl: './todaypage.component.html',
  styleUrls: ['./todaypage.component.css']
})
export class TodaypageComponent implements OnInit {

  constructor(private router: Router) { }

  back()
  {
    this.router.navigate(['dashboard']);
  }
  ngOnInit() {
  }

}
