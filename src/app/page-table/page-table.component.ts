import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.css'],
})
export class PageTableComponent implements OnInit {
  @Input() pages: any = [];

  constructor() {}

  ngOnInit(): void {}
}
