jQuery(function($){
	var $sub_navigation = $('.sub-navigation');
	$sub_navigation.find('.close').on('click', function(){
		$(this).parents('.sub-navigation').slideToggle("fast");
	});
	$('#top .navigation a').on('click', function(){
		$sub_navigation.first().slideToggle("fast", function(){
			// Slide sub container too
			setTimeout(function(){
				$sub_navigation.eq(1).slideToggle('fast');
			},300);
		});
	});

	if (Modernizr.localstorage) {
		if (typeof localStorage["visited"] !== "undefined" && localStorage["visited"] == "true"){
		}else{
			localStorage["visited"] = "true";
			// Show the about section for first visitors!
			$sub_navigation.filter('.container-about').slideToggle('fast');
		} 
	}
});