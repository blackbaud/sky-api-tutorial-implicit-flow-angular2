import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
 *  Pulls in the rxjs toPromise method so the http requests can be use Promises.
 *    NOTE: Angular 2 supports the use of observables, though for this guide we chose
 *          to use Promises for simplicity.
 */
import 'rxjs/add/operator/toPromise';

import { SessionService } from '../../shared/session.service';
import { SettingsService } from '../../shared/settings.service';

@Injectable()
export class ConstituentService {
  private url: string = 'https://api.sky.blackbaud.com/constituent/v1/constituents/';

  constructor(

    /**
     * Pulls in the Http service provided from @angular/http. So this service has access to the http methods.
     */
    private http: Http,
    private sessionService: SessionService,
    private settingsService: SettingsService) { }

  public getById(id: number): Promise<any> {

    /**
     *  The SKY API endpoints require a header is sent along with all requests. The header
     *  must contain a `bb-api-subscription-key` from the config file and an `Authorization` key.
     *  the `Authorization` key's value must start with the string Bearer followed by a space, and
     *  then the token users receive when they are authenticated.
     *
     *  To attach a header to `GET` requests, we make use of the Headers and Options constructors
     *  from the @angular/http library.  We create our variables as `new` instances of these constructors
     *  and pass in the values we need.
     */
    let headers = new Headers({
      'bb-api-subscription-key': "a49d639fd78b4478a26ab677c14878fa",
      'Authorization': 'Bearer ' + this.sessionService.getAccessToken()
    });

    /**
     *  New RequestOptions formats the header object in a way that allows http to attach it to the http request.
     */
    let options = new RequestOptions({ headers: headers });

    if (this.sessionService.isAuthenticated()) {

      /**
      *  `GET` requests can't contain data like the other http methods. So the formatted `options` variable needs to be passed in 
      *  as the second parameter to the `GET` request. Without these headers, SKY API will not be able to authenticate the request.
      */
      return this.http.get(this.url + id, options)
        .toPromise()
        .then((data: any) => JSON.parse(data._body))
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
