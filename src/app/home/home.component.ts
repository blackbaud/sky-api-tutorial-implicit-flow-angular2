import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'auth-home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  /**
  *  Define our public variable isAuthenticated that we use as part of the *ngIf
  *  in our template.   We give this variable a type of boolean so we know what
  *  type of value it can expect to be assigned.
  */
  public isAuthenticated: boolean;

  /**
  *  Here we pull in and create our sessionService based on the SessionService class we imported.
  */
  constructor(
    private sessionService: SessionService) { }

  /**
  *  On initialization we call the sessionService we created in our constructor and make use
  *  of it's isAuthenticated method.  This method will return a boolean value based on whether
  *  users are logged in or not.   It then assignes that returned boolean to the public isAuthenticated
  *  variable we defined above.
  */
  public ngOnInit(): void {
    this.isAuthenticated = this.sessionService.isAuthenticated();
  }
}
