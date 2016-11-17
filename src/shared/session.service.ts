import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable()
export class SessionService {
  storage: Object
  constructor(private settingsService: SettingsService) {}
  isAuthenticated() {
    try {
      if(this.getAccessToken()) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }
  getAccessToken() {
    return JSON.parse(sessionStorage.getItem('token')).access_token;
  }
  setToken(obj: Object) {
    sessionStorage.setItem('token', JSON.stringify(obj));
  }
  login() {
    this.setToken(undefined);
    window.location.href = `https://oauth2.sky.blackbaud.com/authorization?client_id=
    ${this.settingsService.get('SkyApiAppId')}
    &response_type=token&redirect_uri=
    ${this.settingsService.get('AuthRedirectUri')}`;
  }
  logout() {
    this.setToken(undefined);
    // router goes here $location.path('/');
    window.location.reload();
  }
}
