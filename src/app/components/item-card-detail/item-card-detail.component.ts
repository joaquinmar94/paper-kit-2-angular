import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card-detail',
  templateUrl: './item-card-detail.component.html',
  styleUrls: ['./item-card-detail.component.scss']
})
export class ItemCardDetailComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
