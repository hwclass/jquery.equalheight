/*
* Responsive Equal Height Plugin
* by the Chris Coyier / @chriscoyier
* componentized with jQuery by Barış Güler / @hwclass
*/
(function ($) {
	$.fn.equalHeight = function () {
		var container = this;
		var currentTallest = 0,
		  currentRowStart = 0,
		  rowDivs = new Array(),
		  $el,
		  topPosition = 0;
		$(container).each(function () {
		  $el = $(this);
		  $($el).height('auto');
		  topPostion = $el.position().top;
		  if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				  rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
		  } else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		  }
		  for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
		  }
		});
	}
})(jQuery);