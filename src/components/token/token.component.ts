import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../shared/session.service';
import { SettingsService } from '../../shared/settings.service';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component ({
  selector: 'auth-token',
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
    this.hash = window.location.hash.substr(1);
    this.hashArray = this.hash.split('&');

    this.hashArray.forEach((hash) => {
      let obj = hash.split('=');
      this.hashPairs[obj[0]] = obj[1];
    });

    this.sessionService.setToken(this.hashPairs);
    this.settingsService.getConfigFile().then(() => {
      this.router.navigate(['/']);
    });
  }
}
