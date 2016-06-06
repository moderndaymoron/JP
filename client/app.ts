import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Home } from './imports/home/home.ts'
import { About } from './imports/about/about.ts'
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';

// TODO: læra á https://github.com/ocombe/ng2-translate

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/about', as: 'About', component: About }
])

class JP {}

bootstrap(JP, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
