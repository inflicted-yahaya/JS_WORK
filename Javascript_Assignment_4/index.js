const userRole = "Director"; 

if (userRole === "Director") {
    console.log("Viewing Totals Only"); 

} else if (userRole === "Manager") {
    // If the role is Manager
    console.log("Can record procurement & sales"); 

} else if (userRole === "Sales Agent") {
    // If the role is Sales Agent
    console.log("Can record sales only"); 

} else {
    // If the role is anything else
    console.log("Access Denied");
}




let buyerName = "Bahati"
let amountDue = "10000"
let produceName = "Rice"

if (buyerName.length >= 2 && amountDue.length>=5 && produceName != ""){
    console.log ("Credit sale is very valid")
} else {
    console.log ("Credit sale is very invalid")
}

let produceType = "Maize";

switch (produceType){
    case 'Beans':
        console.log ("This will print beans");
        break;
    case 'G-nuts':
        console.log ("Print g-nuts");
        break;
    default:
        console.log ("The prodcue type you are looking for isnt available")    
}

let Prod