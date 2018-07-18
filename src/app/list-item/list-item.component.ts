import { Component, OnInit } from '@angular/core';
import { listItem } from '../list-item';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items = ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
