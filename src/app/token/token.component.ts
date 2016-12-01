import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../shared/session.service';
import { SettingsService } from '../../shared/settings.service';
import { Location } from '@angular/common';

@Component ({
  template: ''
})
export class TokenComponent implements OnInit {

  private hash: String;
  private hashArray: Array<String>;
  private hashPairs: Object = {};

  constructor(
    private location: Location,
    private router: Router,
    private settingsService: SettingsService,
    private sessionService: SessionService
  ) { }

  public ngOnInit(): void {
    /**
     *  After the user grants (or denies) authorization to use their authenticated Blackbaud data, the authorization endpoint
     *  redirects the browser back to the `AuthRedirectUri` specified in the `config.json` file. If the user granted
     *  permission, the URL will contain a fragment with several fields needed to create a token.
     *  [access_token, token_type, expires_in, state, tenant_id, tenant_name].
     */
    this.hash = window.location.hash.substr(1);
    this.hashArray = this.hash.split('&');

    this.hashArray.forEach((hash) => {
      let obj = hash.split('=');
      /**
       *  Above, the URL fragment is split by `&`, so each hash in the hashArray needs to be split and assigned to an object.
       *  Each hash string in the hashArray gets split by the `=`, then the newly created pairs are assigned to the hashPairs object.
       *  (eg. 'access_token=1234', becomes ['access_token', '1234']).
       */
      this.hashPairs[obj[0]] = obj[1];
    });
    /**
     *  Passes the hashPairs object to our sessionService to set the token in sessionStorage for use later in the API requests.
     *  Then redirects the browser back to the home route.
     */
    this.sessionService.setToken(this.hashPairs);
    this.settingsService.getConfigFile().then(() => {
      this.router.navigate(['/']);
    });
  }
}
