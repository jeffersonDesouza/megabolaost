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
		console.log("modal");
		$('#modal1').openModal();

	},
	'submit #js-modal-login': function(event){

		let username = event.target.telefone.value;
		let password = event.target.password.value;

        Meteor.loginWithPassword(username, password);

        if(Meteor.userId()){
            $('#modal1').closeModal();

            $('#js-modal-login').removeClass('invalid');
            $('#telephone_login').removeClass('invalid');
            $('#password').removeClass('invalid');

            $('#js-modal-login').addClass('valid');
            $('#telephone_login').addClass('valid');
            $('#password').addClass('valid');
        }else{
            $('#js-modal-login').addClass('invalid');
            $('#telephone_login').addClass('invalid');
            $('#password').addClass('invalid');

        }



		return false;
	},
    'click .js-sair_button':function(){
        if(Meteor.userId()){
            Meteor.logout();
        }
    }
});
