


function nombrepremier(nombre) {
    for(var i = 2; i < nombre; i++)
      if(nombre%i === 0) return false;
    return nombre > 1;
  }
  console.log(nombrepremier(2));
  console.log(nombrepremier(13));

  function sommenombrespremiers(nombre,nombre2)
{
	if(nombrepremier(nombre)==true && nombrepremier(nombre2)==true)
	{
		var somme = nombre + nombre2;
		return somme;
	}
	else
	{
		return false;
	}
}
