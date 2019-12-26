import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmarkpage',
  templateUrl: './bookmarkpage.component.html',
  styleUrls: ['./bookmarkpage.component.css']
})
export class BookmarkpageComponent implements OnInit {

  constructor(private router: Router) { }

  back(){
    this.router.navigate(['dashboard']);
  }
  ngOnInit() {
  }
  
}
