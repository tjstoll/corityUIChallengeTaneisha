import { Component } from '@angular/core';
import { ITEMS } from './mock-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total = ITEMS.length;
  title = 'List Name';
}
