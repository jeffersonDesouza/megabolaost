import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.navbar.helpers({
	isLoggedIn(){
        if(Meteor.userId()){
          return true;
        }
        return false;
    },
	isNotLoggedIn(){
		return !isLoggedIn();
	}
});



Template.navbar.events({
	'click .button-collapse': function(event){
		$('.button-collapse').sideNav();
	},


});




