import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { Location } from '@angular/common';

@Component ({
  selector: 'auth-token',
  template: require('./token.component.html')
})
export class TokenComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private sessionService: SessionService
  ) { }
  private hash: String = this.location.path();
  private hashArray: Array<String> = this.hash.split('&');
  private hashPairs: Object = {};

  public ngOnInit(): void {
    this.hashArray.forEach((hash) => {
      let obj = hash.split('=');
      this.hashPairs[obj[0]] = obj[1];
    });
    console.log('hash', this.hash);
    console.log('hashArray', this.hashArray);
    console.log('hashPairs', this.hashPairs);

    this.sessionService.setToken(this.hashPairs);
    console.log(this.sessionService.getAccessToken())
    this.router.navigate(['/home']);
  }
}
