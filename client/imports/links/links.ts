import { Component }       from '@angular/core';
import { RouterLink }      from '@angular/router-deprecated';
import { ReactiveVar }     from 'meteor/reactive-var';
import { Meteor }          from 'meteor/meteor';

@Component({
    selector: 'links',
    templateUrl: '/client/imports/links/links.html',
    directives: [RouterLink]
})

export class Links {
    mainText: string = "You are in Links now";
}
