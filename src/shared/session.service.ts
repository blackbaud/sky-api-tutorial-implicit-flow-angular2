import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';
import { Token } from './token.interface';

@Injectable()
export class SessionService {
  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {}

  public isAuthenticated(): boolean {
    try {
      if (this.getAccessToken() !== "") {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  public getAccessToken(): string {
    let response = JSON.parse(window.sessionStorage.getItem('token')) as any;
    return response.access_token || "";
  }

  public setToken(obj?: Object) {
    if (!obj) {
      window.sessionStorage.removeItem('token');
    }
    window.sessionStorage.setItem('token', JSON.stringify(obj));
  }

  public login(): void {
    this.setToken();
    window.location.href = `https://oauth2.sky.blackbaud.com/authorization?client_id=
      ${this.settingsService.get('SkyApiAppId')}
      &response_type=token&redirect_uri=
      ${this.settingsService.get('AuthRedirectUri')}`;
  }

  public logout() {
    this.setToken();
    this.router.navigate(['/home']);
    window.location.reload();
  }
}
