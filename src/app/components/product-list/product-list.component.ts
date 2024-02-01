import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public myOptions: NgxMasonryOptions = {
    gutter: 10,
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    // columnWidth: 200,
    // itemSelector: '.mat-card'
  };
}
