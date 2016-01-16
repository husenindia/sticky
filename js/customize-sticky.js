/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-06-2016 : (DF mm-dd-yyyy)
/*************************/

$(document).ready(function(){
	(function ($) {
		$cstSticky=$('.cst-sticky-position');
		var StcikyElement =function(){
			var stickyTopPosition=0;
			//stickyTopPosition=$cstSticky.position().top;
			stickyElementHeight=$cstSticky.height();
			stickyPrevElementHeight=$cstSticky.prev().height();
			$cstSticky.css({ position:'fixed' });			
			
			return {
			 /*getCurrentPos:function(){
				return stickyTopPosition;
			 },*/
			 getHeight:function(){
				return stickyElementHeight;
			 },
			 getPrevHeight:function(){
				return stickyPrevElementHeight;
			 }
			}
		}	
		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
			if (!uniqueId) {
			  uniqueId = "P&#d6%2S^L3&Z";
			}
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();
		var stickyCalcPos = function() {			
			var stikcyobject=new StcikyElement();			
			windowHeight=$(window).height();			
			//console.log(stkTopPostion=stikcyobject.getCurrentPos());			
			stkHeight=stikcyobject.getHeight();
			stkPrevHeight=stikcyobject.getPrevHeight();		
			stickyCalcResult=(stkPrevHeight-windowHeight)+stkHeight;
			console.log(windowScrollPixel=$(window).scrollTop());
			
		}
		var stickySetPos = function(){
			windowScrollPixel=$(window).scrollTop();
			if(windowScrollPixel<=stickyCalcResult) {
				$cstSticky.css({ position:'fixed' });
			} else {
				$cstSticky.css({ position:'static' });
			}
		}
		$(window).scroll(function(){
			stickySetPos();
		});
		$(window).resize(function () {	
			waitForFinalEvent(function(){
			  stickyCalcPos();
			  stickySetPos();
			}, 500, "P&#d6%2S^L3&Z");
		});
		
		stickyCalcPos();
		stickySetPos();
	})( jQuery );
});