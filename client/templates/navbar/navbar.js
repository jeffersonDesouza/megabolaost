


Template.navbar.helpers({
    isLoggedIn(){
        if(Meteor.userId()){
          return true;
        }
        return false;
    },
	isNotLoggedIn(){
        if(Meteor.userId()){
          return false;
        }
        return true;
	}
});


Template.navbar.events({
	'click .button-collapse': function(event){
		$('.button-collapse').sideNav();
	},

	'click #modal-trigger': function(event){
		console.log("modal");
		$('#modal1').openModal();

	},
	'submit #js-modal-login': function(event){

		let username = event.target.telefone.value;
		let password = event.target.password.value;

        Meteor.loginWithPassword(username, password);

		return false;
	},
    'click #js-sair_button':function(){
        Meteor.logout();
    }
});
