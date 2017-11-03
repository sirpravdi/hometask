var servButtonClick = function(){
	var view_mode = document.getElementById('nc_view_mode'),
		client_serv = document.getElementById('nc_client_serv');
	this.classList.toggle('nc-section_button-selected');
	this.classList.toggle('nc-section_button-unselected');
	if(this!=view_mode){
 		view_mode.classList.remove('nc-section_button-selected');
		view_mode.classList.add('nc-section_button-unselected');
	}
	else{
 		client_serv.classList.remove('nc-section_button-selected');
		client_serv.classList.add('nc-section_button-unselected');
	}
};

var reqButtonClick = function(){
	var offline_view = document.getElementById('nc_offline_view'),
		out_call = document.getElementById('nc_out_call'),
		in_call = document.getElementById('nc_in_call');
	this.classList.toggle('nc-section_button-selected');
	this.classList.toggle('nc-section_button-unselected');
	if(this==offline_view){
 		in_call.classList.remove('nc-section_button-selected');
		in_call.classList.add('nc-section_button-unselected');
		out_call.classList.remove('nc-section_button-selected');
		out_call.classList.add('nc-section_button-unselected');
	}
	else if(this==in_call){
 		offline_view.classList.remove('nc-section_button-selected');
		offline_view.classList.add('nc-section_button-unselected');
		out_call.classList.remove('nc-section_button-selected');
		out_call.classList.add('nc-section_button-unselected');
	}
	else{
		in_call.classList.remove('nc-section_button-selected');
		in_call.classList.add('nc-section_button-unselected');
		offline_view.classList.remove('nc-section_button-selected');
		offline_view.classList.add('nc-section_button-unselected');
	}
};




document.addEventListener("DOMContentLoaded", function(event) { 
	var view_mode = document.getElementById('nc_view_mode'),
		client_serv = document.getElementById('nc_client_serv'),
		offline_view = document.getElementById('nc_offline_view'),
		out_call = document.getElementById('nc_out_call'),
		in_call = document.getElementById('nc_in_call'),
		accoper = document.getElementById('nc_accoper'),
		cardoper = document.getElementById('nc_cardoper'),
		dbo = document.getElementById('nc_dbo');

		view_mode.addEventListener('click', servButtonClick);
		client_serv.addEventListener('click', servButtonClick);

		offline_view.addEventListener('click', reqButtonClick);
		out_call.addEventListener('click', reqButtonClick);
		in_call.addEventListener('click', reqButtonClick);


});