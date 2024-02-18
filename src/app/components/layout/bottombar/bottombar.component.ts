import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.scss'
})
export class BottombarComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  routeNavigate(url: string) {
    this.router.navigate([url])
  }

}
