import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchValue = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit(): void {}

  inputValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.term = target.value;
  }

  formSubmit(event: Event) {
    event?.preventDefault();
    this.searchValue.emit(this.term);
  }
}
