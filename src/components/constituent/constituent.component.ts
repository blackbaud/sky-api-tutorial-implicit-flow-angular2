import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConstituentService } from '../../shared/constituent.service';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'constituent',
  template: require('./constituent.component.html'),
  providers: [ConstituentService]
})
export class ConstituentComponent implements OnInit {
  private constituent_id: number = 280;

  public constituent: any;

  public showImage = true;

  public showTitle = true;

  public showSubtitle = true;

  public showContent = true;

  public showKeyInfo = true;

  constructor(

    private constituentService: ConstituentService,

    private router: Router
  ) {}

  getData(): void {
      this.constituentService.getById(this.constituent_id)
          .then(data => this.constituent = data)
  };

  ngOnInit(): void {
    this.getData();
  }

  private handleError(error: any): void {
    console.log('ERROR:', error.message || error);
    Promise.resolve(error);
  }
}
