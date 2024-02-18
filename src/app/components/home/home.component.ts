import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  routeNavigate(url: string) {
    this.router.navigate([url]);
  }
}
