import { Component } from '@angular/core';
import { WsearchService } from './wsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [{}];

  constructor(private wsearchService: WsearchService) {}

  searchValue(value: string) {
    this.wsearchService.search(value).subscribe((response) => {
      this.pages = response;
      console.log(response);
    });
  }
}
