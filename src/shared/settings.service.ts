import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SettingsService {
  settings: Object
  constructor(private http: Http) {}

  get(key: string) {
    return this.settings[key] || false;
  }
  getConfigFile() {
    return this.http
        .get('/data/config.json')
        .map(response => {
            this.settings = response.json();
            return this.settings;
        })
        .toPromise();
  }
}
