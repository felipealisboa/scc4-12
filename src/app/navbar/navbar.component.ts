import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    '../styles/bootstrap-4.0.0-dist/css/bootstrap.css',
    './navbar.component.css'
  ]
})
export class NavbarComponent implements OnInit {

  appTitle: string = 'myapp';
  constructor() { }

  ngOnInit() {
  }

}
