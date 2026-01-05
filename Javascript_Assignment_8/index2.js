function greet(){
    return "Hello!";
}

function execute(action){
    console.log (action())
}

execute(greet)

const produce = ['Beans', 'Maize','Rice']

produce.forEach((product, index)=>{
    console.log (`${product} is index number ${index + 1}`)
})

let emails = [
    'yb@gmail.com',
    'hn@gmail.com',
    'yaqub@gmail.com',
    'yahaya@gmail.com'
]

function sendMail (emailAddress, index){
    console.log(`Email was successfuly semt to ${emailAddress} | ${index + 1}`)
}

emails.forEach((email,index)=>{
    sendMail(email, index)
})

let capitalisedEmails = emails.map((email)=> {
    return email.toUpperCase()
})

console.log (emails)
console.log (capitalisedEmails)

let ages = [56, 78,34 ,67, 23,78 ,90, 45, 34, 23,78]

let filteredAges = ages.filter((age)=>age>=25)

console.log (ages)
console.log (filteredAges)

let sales =  [
    {customerName : 'Simon', isCreditSale : true, amount:10_000},
    {customerName : 'Alain', isCreditSale : false, amount:15_000}
]

let filteredSales = sales.filter((sale)=> sale.amount > 2_000 && sales.isCreditSale === true)

console.log (filteredSales)

let sum = ages.reduce((sum,currentAge)=>{
    return sum+currentAge
} , 0)

console.log (sum)