Template.navbar.onRendered(
    function(){
        $('.button-collapse').sideNav();
    }
);



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
	},
    isAdm(){

        return true;
    },
    getUsername:function(){


        return "";
    }
});


Template.navbar.events({
	'click .button-collapse': function(event){
		$('.button-collapse').sideNav();
	},

	'click #modal-trigger': function(event){
		$('#modal1').openModal();

	},
	'submit #js-modal-login': function(event){

		let username = event.target.telefone.value;
		let password = event.target.password.value;

        Meteor.loginWithPassword(username, password);

        if(!Meteor.userId()){
            $('#telephone_login').addClass('invalid');
            $('#password').addClass('invalid');
        }else{
            $('#modal1').closeModal();
        }







		return false;
	},
    'click .js-sair_button':function(){
        if(Meteor.userId()){
            Meteor.logout();
        }
    }
});
