import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';
import { Token } from './token.interface';

/**
*  The Injectable decorator provides the meta data for our exported SessionService
*  class to allow Angular 2 to recognize this as a service / provider that other components
*  and modules will make use of.
*/
@Injectable()

/**
*  Create a router and settingsService our SessionService class can make use of.
*/
export class SessionService {
  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}

  /**
  *  Checks and parses the sessionStorage of our window object for a token.  Then returns either the found
  *  access token, or an empty string.
  */
  public getAccessToken(): string {
    let response = JSON.parse(window.sessionStorage.getItem('token')) as any;
    return response.access_token || "";
  }

  /**
  *  This method checks for the existance of an access Token.    It returns a boolean value.   Access Tokens
  *  are provided from the authentication flow.  When users successfully log in, they are provided an access token.
  */
  public isAuthenticated(): boolean {
    try {
      if (this.getAccessToken() !== "") {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  /**
  *  Calls the setToken method with no parameters to clear out any existing `token` that may be in sessionStorage already.
  *  Next we set the windows location to our Blackbaud authorization url, and pull in the `SkyApiAppId` and `AuthRedirectUri`
  *  variables we set in our config file.   This redirects the browser to the authorization location and upon success it
  *  redirects the browser back to the specified `AuthRedirectUri`.
  */
  public login(): void {
    this.setToken();
    window.location.href = `https://oauth2.sky.blackbaud.com/authorization?client_id=
      ${this.settingsService.get('SkyApiAppId')}
      &response_type=token&redirect_uri=
      ${this.settingsService.get('AuthRedirectUri')}`;
  }

  /**
  *  Calls the setToken method with no parameters to clear out any active `Token` that may be in sessionStorage.  Makes use
  *  of the router we created in our constructor function to navigate the browser to `/home` before we call for the window
  *  to perform a refresh/reload to clear out any cached data that may still be hanging around.
  */
  public logout() {
    this.setToken();
    this.router.navigate(['/home']);
    window.location.reload();
  }

  /**
  *  setToken takes an optional (?) obj parameter.   If no parameter is provided, it will remove any `token` that may
  *  be existing in the sessionStorage.   If a valid token is provided, it will stringify the token object, and save it
  *  in the windows sessionStorage.
  */
  public setToken(obj?: Object) {
    if (!obj) {
      window.sessionStorage.removeItem('token');
    }
    window.sessionStorage.setItem('token', JSON.stringify(obj));
  }
}
