import { Component }       from '@angular/core';
import { RouterLink }      from '@angular/router-deprecated';
import { ReactiveVar }     from 'meteor/reactive-var';
import { Meteor }          from 'meteor/meteor';

@Component({
    selector: 'services-main',
    templateUrl: '/client/imports/servicesMain/servicesMain.html',
    directives: [RouterLink]
})

export class ServicesMain {
    services: string = "You are in Services now";
}
