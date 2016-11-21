import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';

@Injectable()
export class SessionService {
  constructor(private settingsService: SettingsService, private router: Router) {}
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
    return JSON.parse(window.sessionStorage.getItem('token')).access_token;
  }

  public setToken(obj: Object) {
    if (obj === undefined) {
      window.sessionStorage.removeItem('token');
    }
    window.sessionStorage.setItem('token', JSON.stringify(obj));
  }

  public login(): void {
    this.setToken(undefined);
    window.location.href = `https://oauth2.sky.blackbaud.com/authorization?client_id=
    ${this.settingsService.get('SkyApiAppId')}
    &response_type=token&redirect_uri=
    ${this.settingsService.get('AuthRedirectUri')}`;
  }
  public logout() {
    this.setToken(undefined);
    this.router.navigate(['/home']);
    window.location.reload();
  }
}
