function mixer(table) 
{
    let image = table.length;
    let temp;
    let rand;
    while (image > 0) 
    {
        rand = Math.floor(Math.random() * image);
        image--;
        temp = table[image];
        table[image] = table[rand];
        table[rand] = temp;
    }
    return table;
}

let b = $('#button');

for(let image = 0; image < 6; image++ )
{
	$("#rangees").append("<img src='"+image+".png'/>");
}

b.click(function() 
{
	$("h1").empty();
	$('#rangees').empty();
	table=mixer([0, 1, 2, 3, 4, 5]);
	$("#melangees").empty();
	for(let image = 0; image < 6; image++ )
	{

		$("#melangees").append("<img class='arc' id='"+table[image]+"' src='"+table[image]+".png'/>");
	}
	$('#0').click(function()
	{	$(this).remove();
		$('#rangees').append("<img src='0.png'/>");
		let score=0;
		$('.arc').click(function()
		{
			let id = $(this).attr("id");
			if(id==score+1)
			{
				score++;
				$('#rangees').append("<img src='"+id+".png'/>");
				$(this).remove();
				if(id==5)
					{
						let reussi = $("h1").prepend("<b> Bravo </b>! ");
						reussi.css( "color", "green" );
					}
			}
			else
			{
				let perdant = $("h1").prepend("<b> Réessayer </b>! ");
				perdant.css( "color", "red" );
			}
		})

	})
})