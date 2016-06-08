import 'reflect-metadata';
import { Component } from '@angular/core';
import { EmployeeSlideshow } from "./employeeSlideshow/employeeSlideshow.ts";
import { Services } from "./services/services.ts";


@Component({
  selector: 'sidebar',
  templateUrl: '/client/imports/sidebar/sidebar.html',
  directives: [EmployeeSlideshow, Services]
})
export class Sidebar {

  constructor() { }

}
