//declaring variables

let person_1 = "Miranda" ; 
let person_2 = "Angel" ;
let money_1 = 5 ; 
let money_2 = 5 ;

function coffee_purchase( person_1, money_1 ) 
{
    //telling computer to decide
    if ( money_1 > 5 ): 
        { 
            print (person_1 + "Gets coffee"); 
        }
    else if ( money_1 == 5 ): 
        { 
            print (person_1 + "Gets coffee, but they need to watch their savings"); 
        }
    else ( money_1 > 5 && money_1 == 5 ): 
        { 
            print (person_1 + "does not get coffee"); 
        }
} 

coffee_purchase( person_1, money_1); 
