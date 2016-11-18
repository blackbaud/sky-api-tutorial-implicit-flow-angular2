import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SettingsService {
  public settings: Object;
  constructor(private http: Http) {}

  public get(key: string) {
    if (!this.settings) {
      return this.getConfigFile()
        .then(() => this.settings[key] || false)
    }
    return this.settings[key] || false;
  }

  public getConfigFile() {
    return this.http
        .get('/data/config.json')
        .map(response => {
            this.settings = response.json();
            return this.settings;
        })
        .toPromise()
        .catch((error) => {
          console.log('ERROR:', error);
        });
  }
}
