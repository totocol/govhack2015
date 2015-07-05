/**
 * @file
 * script.js
 */
(function ($) {
	'use strict';

Drupal.behaviors.govehack = {
    attach: function (context, settings) {
    var addTooltip = function(ele){
    	var self = this;
    	var metric = ele;
	  	var data = metric.find('.lga');
	  	var handle = metric.find('.handle');
	  	var topFive = metric.find('.lga[data-ranking ="5"]');
	  	var topTen = metric.find('.lga[data-ranking ="10"]');
	  	var bottomTen = metric.find('.lga.bottom-10').eq(0);
	  	var bottomFive = metric.find('.lga.bottom-5').eq(0)


	  	data.each(function(){
	  	$(this).mouseenter( function(){
	  		reset(data);
	  		$(this).addClass('active');
	  		});
		});

	 function addPlaceholder(ele, string, before){
	 	if (before){
	 		ele.before("<div class='placeholder lga " + string +"'> &bull;&bull;&bull; </div>");
	 	} else{
	 		ele.after("<div class='placeholder lga " + string +"'> &bull;&bull;&bull; </div>");
	 	}
	 }

	 function reset(obj){
	 	obj.each(function(){
	  			$(this).removeClass('active');
	  		});
	 	};

	document.addEventListener('click', function(ev){
		var target = $(ev.target);
		if (target !== metric && !metric.has(target).length){
			reset(data);
		}
	});
	addPlaceholder(topFive, 'five');
	addPlaceholder(topTen, 'ten');
	addPlaceholder(bottomTen, 'ten', true );
	addPlaceholder(bottomFive, 'five', true );


	 	return self;
    };


	 var metric = $('.block-govhack-2015.metric');
	 metric.each(function(){
	 	addTooltip($(this));
	 });

	}
}

Drupal.behaviors.govehackPostcode = {
	attach:function(){

		var button = document.createElement('div');
		button.setAttribute('id', 'open-search');
		button.textContent = "Change postcode";

		var postcode = $('.get-postcode');
		postcode.after(button);

		button.addEventListener('click', function(){
			postcode.slideToggle('slow');
		});
	}
}

Drupal.behaviors.home = {
	attach:function(){

		var button = $('#edit-submit');
		button.val("Show me");

		var input = $('.front #edit-postcode');
		input.attr("placeholder", "Your NSW Postcode");

	}
}

Drupal.behaviors.form = {
	attach:function(){

		function watchChange(obj){
			obj.change(function(){
				if($(this).prop( "checked" )){
					$(this).addClass("checked");
				} else {
					$(this).removeClass("checked");
				}
			});
		}

		var check = $("input[type='checkbox']").each(function(){
			watchChange($(this));
		})
		
	}
}

})(jQuery);
