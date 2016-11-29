import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/**
*  Pull in the rxjs toPromise method so we can convert our http requests to Promises.
*    NOTE: Angular 2 supports the use of observables, though for this guide we chose
*          to use Promises instead.
*/
import 'rxjs/add/operator/toPromise';

import { SessionService } from '../../shared/session.service';
import { SettingsService } from '../../shared/settings.service';

@Injectable()
export class ConstituentService {
  private url: string = 'https://api.sky.blackbaud.com/constituent/v1/constituents/';

  constructor(

    /**
    * Pull in the Http service provided from @angular/http.   This allows us
    * to make our http requests.
    */
    private http: Http,
    private sessionService: SessionService,
    private settingsService: SettingsService) { }

  public getById(id: number): Promise<any> {

    /**
    *  The SKY API endpoints require we send a header with all of our requests.   The header
    *  must contain a `bb-api-subscription-key` from our config file, and an `Authorization` key.
    *  the `Authorization` key's value must start with the string Bearer followed by a space, and
    *  then the token users receive when they are authenticated.
    *
    *  To attach a header to our `GET` requests, we make use of the Headers and Options constructors
    *  from the @angular/http library.  We create our variables as `new` instances of these constructors
    *  and pass in the values we need.
    */
    let headers = new Headers({
      'bb-api-subscription-key': "a49d639fd78b4478a26ab677c14878fa",
      'Authorization': 'Bearer ' + this.sessionService.getAccessToken()
    });

    /**
    *  New RequestOptions formats our header object in a way that allows http to attach it to our http request.
    */
    let options = new RequestOptions({ headers: headers });

    if (this.sessionService.isAuthenticated()) {

      /**
      *  `GET` requests can't contain data like the other http methods.  Instead we can pass our formatted `options` variable
      *  that contains our headers as a second parameter in our `GET` request so that our `hearders` are incorperated into our
      *  request.  Without these headers SKY API will not be able to authorize our request.
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
