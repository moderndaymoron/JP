import { Component }       from '@angular/core';
import { RouterLink }      from '@angular/router-deprecated';
import { ReactiveVar }     from 'meteor/reactive-var';
import { Meteor }          from 'meteor/meteor';

@Component({
    selector: 'about',
    templateUrl: '/client/imports/about/about.html',
    directives: [RouterLink]
})

export class About {
    mainText: string = "You are in about now";
}
