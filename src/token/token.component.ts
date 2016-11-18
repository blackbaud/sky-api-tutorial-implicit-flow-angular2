import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../shared/session.service';
import { Location } from '@angular/common';

@Component ({
  selector: 'token',
  template: require('./token.component.html'),
})
export class TokenComponent implements OnInit {
  constructor(
    private location: Location,
    private router: Router,
    private sessionService: SessionService
  ) { }
  private hash: String = this.location.path().substr(1);
  private hashArray: Array<String> = this.hash.split('&');
  private hashPairs: Object = {};

  ngOnInit(): void {
    this.hashArray.forEach((hash) => {
      let obj = hash.split('=');
      this.hashPairs[obj[0]] = obj[1];
    });
    console.log("HERE!!!");
    this.sessionService.setToken(this.hashPairs);
    setTimeout(this.router.navigate(['/home']), 2000);
  }
}
