$(document).ready(function(){
	
	$('h1').draggable({
		'cursor':'pointer'
	});
	$('.box').droppable({'drop':function(){
		
		$('body').css('background','green');
	}});
	

	$('.sort').sortable();
	$('.accor').accordion();
	$('.dialog').dialog();
	$('.date').datepicker();
	$('.maintab') .tabs();
	
});