import { Mongo }    from 'meteor/mongo';
import { Meteor }   from 'meteor/meteor';

export let Employees = new Mongo.Collection<Employee>('employees');
