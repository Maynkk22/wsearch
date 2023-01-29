import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface wikiResponse {
  query: {
    search: {
      title: string;
      wordcount: number;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WsearchService {
  constructor(private http: HttpClient) {}

  search(value: string) {
    return this.http
      .get<wikiResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: value,
          origin: '*',
        },
      })
      .pipe(map((value) => value.query.search));
  }
}
