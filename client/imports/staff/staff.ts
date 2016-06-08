import { Component }        from '@angular/core';
import { RouterLink }       from '@angular/router-deprecated';
import { ReactiveVar }      from 'meteor/reactive-var';
import { Meteor }           from 'meteor/meteor';
import { Mongo }            from 'meteor/mongo';
import { Employees }        from '../../../collections/employees.ts';

@Component({
    selector: 'staff',
    templateUrl: '/client/imports/staff/staff.html',
    directives: [RouterLink]
})

export class Staff {
    staff: string = "You are in Staff now";
    employees: Mongo.Cursor<Employee>;

    constructor(){
        this.employees = Employees.find();
    }
}
