import { Meteor } from 'meteor/meteor';
import { loadInfo } from './loadInfo.ts';

Meteor.startup(loadInfo);
