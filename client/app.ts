import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Home } from './imports/home/home.ts';
import { About } from './imports/about/about.ts';
import { Sidebar } from "./imports/sidebar/sidebar.ts";
import { Staff } from "./imports/staff/staff.ts";
import { ServicesMain } from "./imports/servicesMain/servicesMain.ts";
import { Links } from "./imports/links/links.ts";
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouterLink } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';

// TODO: læra á https://github.com/ocombe/ng2-translate

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES, RouterLink, Sidebar]
})

@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/about', as: 'About', component: About },
  { path: '/staff', as: 'Staff', component: Staff },
  { path: '/services', as: 'ServicesMain', component: ServicesMain },
  { path: '/links', as: 'Links', component: Links }
])

class JP {}

bootstrap(JP, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
