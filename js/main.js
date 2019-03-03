
$(document).ready(function() {

	pokazLogo(9,0);	
	$('#loading').hide();
	
	$(window).scroll(function() {
		/*ShowPage();*/
		scrollFunction();		
	});		
	
	$("#fejsik").mouseover(function() {
		$(this).stop().animate({
			right: '0',
		}, 300);
	})
 
	$("#fejsik").mouseout(function(){
		$(this).stop().animate({
			right: '-305px',
		}, 200);
	});    
	
});

$(window).resize(function () {
  MonitorParent();
});

function scrollFunction() {  
   
   if (document.documentElement.scrollTop <= 50) {	
	if($('#navbar').css('opacity') == 0.9) {
		$( ".nav" ).css('top', 'auto').animate({ bottom:0 }, 100 );		
		$( "#navbar" ).animate({ opacity: 1, minHeight:"90px", height:"90px" }, 100 );		
		$("#navbar-brand").fadeIn(500);		
	}   
  } else {	 
	  if($('#navbar').css('opacity') == 1) {
		  $( ".nav" ).animate({ top:0 }, 1000 );
		  $("#navbar-brand").fadeOut(500);
		  $( "#navbar" ).animate({ opacity: 0.9, minHeight:"50px", height:"50px" }, 1000 )		  		  
	  }    
  }
  
}

function MonitorParent() {
	var MonitorWidth = 0;	
	MonitorWidth = $('#MonitorCurrent').width();
	$('#MonitorParent').css({height:MonitorWidth+'px'});
}

function ShowPage() {		

		var Page = 1;
		$( ".pages" ).each( function( index, element ){
			Page++;			
		});		
							
		if(Page>0 && Page<=4) {							
					$('#loading').show();				
					$.ajax({
						url: 'get-page.php?page='+Page,
						dataType: 'html',
						async: true,
						success: function(html) {							
							var PageNext = Page+1;
							$('#nextPagesContent').append('<div class="pages" id="Page'+Page+'" data-id="'+Page+'">'+html+'</div>');
							$('#loading').hide();
							console.log(PageNext);	
							Waypoint.refreshAll();							
						}
					});				
			}
	
}

function pokazLogo(ile,ktory) {          
    
   if(ktory == 0) ktory = ile;
   else ktory = ktory-1;
   
   if(ktory==0) ktory=ile;
    
   setTimeout(function(){ pokazLogo(ile,ktory); },5000);
    
   poprzedni = ktory+1;    
   if(poprzedni>ile) poprzedni=1;
	
	$("#wwwimg"+poprzedni).hide();
	$("#wwwimg"+ktory).fadeIn(2000);
    
}