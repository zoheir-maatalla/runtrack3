ferier = [	 '2020/01/01'
    	    ,'2020/04/13'
        	,'2020/05/01'
            ,'2020/05/08'
    	    ,'2020/05/21'
        	,'2020/06/01'
            ,'2020/07/14'
    	    ,'2020/08/15'
            ,'2020/11/01'
            ,'2020/11/11'
            ,'2020/12/25'];
            

function jourtravaille(date){
	day = date.getDate();
    var month  = date.getMonth() +1;
    var months = ['Janvier'
                , 'Février'
                , 'Mars'
                , 'Avril'
                , 'Mai'
                , 'Juin'
                , 'Juillet'
                , 'Août'
                , 'Spetmbre'
                , 'Octobre'
                , 'Novembre'
                , 'Décembre'];
    year = date.getFullYear();
    dayOfWeek = date.getDay();
	dateToString = year + "/" + month + "/" + day;
	
	for(element of ferier){
		if (dateToString == element){
            return console.log("Oui, " + day + " " + months[month -1] + " " + year + " est un jour férier.")
		}
         if(dayOfWeek == 0 || dayOfWeek == 6){
            return console.log("Non, " + day + " " + months[month -1] + " " + year + " est un week-end.")
        } 
        
    }
    return console.log("Oui, " + day + " " + months[month -1] + " " + year + " est un jour travaillé.")
}
date = new Date('2020/12/25');
jourtravaille(date)
date1 = new Date('2021/11/25');
jourtravaille(date1)
date1 = new Date('2021/03/14');
jourtravaille(date1)
