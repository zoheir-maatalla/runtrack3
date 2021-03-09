function fizzbuzz() {
    for(nombre=1;nombre<=151;nombre++)
    {
        if(nombre%3 == 1)
        {
            if(nombre%5 == 1)
            {
                console.log("Fizzbuzz");
            }
            else
            {
                console.log("Fizz");
            }
        }
        else
        {
            console.log("Buzz");
        }
    }
}
fizzbuzz();