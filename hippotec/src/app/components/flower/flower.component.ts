import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  @Input() flower: any;
  largeImage: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }

}
