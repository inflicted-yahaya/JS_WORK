let product = {
    "name" : "Laptop",
    "height" : 100,
    "purchasedAt" : new Date(),
    "purchasedBy" : "Yahaya",
    "isAvailable" : true
}

if (product.isAvailable === true) {
    console.log ("Fuck you Yhaya")
} else {
    console.log ("This has completely worked")
}

product.isAvailable = false;

if (product.isAvailable === true && product.height >= 90) {
    console.log (`This has actually worked out and ${product.purchasedBy} has bought a ${product.name} on ${product.purchasedAt}`)
} else {
    console.log ("You are not the one who bought this item, please recheck")
}

delete product.name

console.log (product)

for (const key in product.purchasedAt) {}

console.log (Object.keys(product))


let salesRecord = {
    "produceName" : "Beans",
    "tonnageInKgs" : 100,
    "amountPaid" : 400000,
    "buyersName" : "Simon"
}

// if (salesRecord.produceName ===  "Maize" && salesRecord.tonnageInKgs >= 100) {
//     console.log ("This product is completely valid and sold at KGL")
// } else {
//     console.log ("This product is not valid")
// }

// salesRecord.buyersName = "Droti"

// salesRecord.isCreditSale = true
// salesRecord.dateOfSale = new Date()

// console.log (salesRecord)


const keys = Object.keys(salesRecord)

for (let key of keys) {
    console.log (key)
}