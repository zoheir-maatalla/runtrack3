$("#button").click(function() {
    $.ajax({
        url: 'expression.txt', 
        type: 'GET',
        dataType: 'text',
        success: function(msg)
        {
            let expression = "<p>"+msg+"</p>";
            $("body").append(expression);
        }
    });
         
});