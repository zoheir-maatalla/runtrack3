function tri(number, order){
    
    if(order == 'asc')
    {
        number.sort(function(a,b) {
            return a - b ; 
        }); 
    }
    else if(order == 'desc')
    {
        number.sort(function (a,b){
            return b - a ;
        });
    }
    
    console.log(number); 
}

number = [21,342,124,893,8,1098,3890,980] ;

tri(number)
tri(number,'desc'); 
tri(number, 'asc');