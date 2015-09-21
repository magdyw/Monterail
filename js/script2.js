
// ----------------------- VOTES COUNTING -----------------------  



var votes=0;
var votes1 = 0; 
var votes2 = 0; 
var votes3 = 0; 
var votes4 = 0; 


$('.votes-count').html(votes +" <i> votes </i>");
		
$('#vote-up-1').click(function(){
	votes1= votes1+1;
			
			if(votes1== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes1 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes1 +" <i> votes </i>");
		} 


	});

$('#vote-down-1').click(function(){
	votes1= votes1-1;
			
			if(votes1== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes1 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes1 +" <i> votes </i>");
		} 


	});


$('#vote-up-2').click(function(){
	votes2= votes2+1;
			
			if(votes2== 1 ) {
			$(this).parent().parent().parent().prev().children().html(votes2 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children().html(votes2 +" <i> votes </i>");
		} 


	});

$('#vote-down-2').click(function(){
	votes2= votes2-1;
			
			if(votes2== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes2 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes2 +" <i> votes </i>");
		} 


	});


$('#vote-up-3').click(function(){
	votes3= votes3+1;
			
			if(votes3== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes3 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes3 +" <i> votes </i>");
		} 


	});

$('#vote-down-3').click(function(){
	votes3= votes3-1;
			
			if(votes3== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes3 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes3 +" <i> votes </i>");
		} 


	});


$('#vote-up-4').click(function(){
	votes4= votes4+1;
			
			if(votes4== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes4 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes4 +" <i> votes </i>");
		} 


	});

$('#vote-down-4').click(function(){
	votes4= votes4-1;
			
			if(votes4== 1 ) {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes4 +" <i> vote </i>");
			}
			else {
			$(this).parent().parent().parent().prev().children('.votes-count').html(votes4 +" <i> votes </i>");
		} 


	});





