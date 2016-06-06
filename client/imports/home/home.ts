import { Component }       from '@angular/core';
import { RouterLink }      from '@angular/router-deprecated';
import { ReactiveVar }     from 'meteor/reactive-var';
import { Meteor }          from 'meteor/meteor';

@Component({
    selector: 'home',
    templateUrl: '/client/imports/home/home.html',
    directives: [RouterLink]
})

export class Home {
    info: string = "this is a Home variable :)";
}
