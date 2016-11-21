import { Component } from '@angular/core';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'login',
  template: require('./login.component.html')
})
export class LoginComponent {
  constructor (
    private sessionService: SessionService
  ) {}

  private Login(): void {
    this.sessionService.login();
  }
}
