import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable()
export class SessionService {
  constructor(private settingsService: SettingsService) {}
  public isAuthenticated() {
    try {
      if (this.getAccessToken()) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }
  public getAccessToken() {
    return JSON.parse(sessionStorage.getItem('token')).access_token;
  }
  public setToken(obj: Object) {
    if (obj === undefined) {
      sessionStorage.removeItem('token');
    }
    sessionStorage.setItem('token', JSON.stringify(obj));
  }
  public login() {
    this.setToken(undefined);
    window.location.href = `https://oauth2.sky.blackbaud.com/authorization?client_id=
    ${this.settingsService.get('SkyApiAppId')}
    &response_type=token&redirect_uri=
    ${this.settingsService.get('AuthRedirectUri')}`;
  }
  public logout() {
    this.setToken(undefined);
    // router goes here $location.path('/');
    window.location.reload();
  }
}
