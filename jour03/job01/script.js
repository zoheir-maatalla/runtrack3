
// $ = jQery

let a = jQuery('#button');

let test = false;

a.click(function() 

{	
	let text = $("<p id='texte'></p>").text("le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément."); 
	let button = $("<button id='reverse'></button>").text("Cacher"); 
	$("body").append(text, button);
	let b = $('#reverse');
	b.click(function()
	{	console.log(b);
		b.remove();
		$('#texte').remove();
	})
    
})