/**
*  Import our components dependencies and constructors.
*/
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SettingsService } from '../shared/settings.service';

/**
*  Use the Component decorator to create the meta data for our new component
*  and register it with our Angular 2 application for use.
*/
@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})

/**
*  create and export the class for this component.   The custom methods and properties of this
*  component are defined and used here.  When creating our class we can extend other classes, gaining
*  access to their methods and properties, or we can implement an interface, instructing out app to define
*  specific methods or properties.
*/
export class AppComponent implements OnInit {

  /**
  *  Methods unique to this class are defined at the top of our class object.
  */
  public isReady: Boolean = false;

  /**
  *  The constructor method is used for creating specific methods and properties when the class is created.
  */
  constructor(
    private titleService: Title,
    private settingsService: SettingsService) { }

  /**
  *  ngOnInit is an Angular 2 interface that forces our class to define a method that will be run when our component is
  *  initialized.
  */
  public ngOnInit(): void {
    this.setTitle('SKY API Implicit Flow Tutorial - Angular 2');
    this.settingsService.getConfigFile().then(() => {
      this.isReady = true;
    });
  }

  /**
  *  Sets the value of the <title> </title> tags in our index based on the title we pass in during On Init.
  */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
