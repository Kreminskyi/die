				$(function() {
				  $(&#39;a[href*=#]:not([href=#])&#39;).click(function() {
				    if (location.pathname.replace(/^\//,&#39;&#39;) == this.pathname.replace(/^\//,&#39;&#39;) &amp;&amp; location.hostname == this.hostname) {
			
				      var target = $(this.hash);
				      target = target.length ? target : $(&#39;[name=&#39; + this.hash.slice(1) +&#39;]&#39;);
				      if (target.length) {
				        $(&#39;html,body&#39;).animate({
				          scrollTop: target.offset().top
				        }, 1000);
				        return false;
				      }
				    }
				  });
				});
	
			$(function() {
				var pull 		= $(&#39;#pull&#39;);
					menu 		= $(&#39;nav ul&#39;);
					menuHeight	= menu.height();
				$(pull).on(&#39;click&#39;, function(e) {
					e.preventDefault();
					menu.slideToggle();
				});
				$(window).resize(function(){
	        		var w = $(window).width();
	        		if(w &gt; 320 &amp;&amp; menu.is(&#39;:hidden&#39;)) {
	        			menu.removeAttr(&#39;style&#39;);
	        		}
	    		});
			});
