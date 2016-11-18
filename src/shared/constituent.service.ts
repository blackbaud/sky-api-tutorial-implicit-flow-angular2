import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SessionService } from './session.service';

@Injectable()
export class ConstituentService {
  private url : string = 'https://api.sky.blackbaud.com/constituent/v1/constituents/';

  constructor(private http: Http, private sessionService: SessionService) {}

  public getById(id: number) {
    if(this.sessionService.isAuthenticated()) {
      return this.http
          .get(this.url + id)
          .toPromise()
          .then((data: any) => JSON.parse(data))
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
