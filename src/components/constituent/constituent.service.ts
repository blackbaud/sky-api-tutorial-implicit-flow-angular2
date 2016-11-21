import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SessionService } from '../../shared/session.service';
import { SettingsService } from '../../shared/settings.service';

@Injectable()
export class ConstituentService {
  private url : string = 'https://api.sky.blackbaud.com/constituent/v1/constituents/';
  constructor(
    private http: Http,
    private sessionService: SessionService,
    private settingsService: SettingsService
  ) { }

  public getById(id: number) {
    let headers = new Headers(
    {
      'bb-api-subscription-key': this.settingsService.get("SkyApiSubscriptionKey"),
      'Authorization': 'Bearer ' + this.sessionService.getAccessToken()
    })
    let options = new RequestOptions({headers: headers});
    if(this.sessionService.isAuthenticated()) {
      return this.http
        .get(this.url + id, options)
        .toPromise()
        .then((data: any) => { return JSON.parse(data._body) })
        .catch(this.handleError);
    } else {
      return Promise.reject({});
    }
  }

  private handleError(error: any) {
    console.log(error.message || error);
    return Promise.reject(error);
  }
}
