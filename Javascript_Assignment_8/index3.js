let users = [
    'Zahra',
    'Florence',
    'Uwase',

]

const uniqueUsers = new Set(users);

console.log(uniqueUsers)

uniqueUsers.add ('Mark')
uniqueUsers.delete ('Uwase')

console.log(uniqueUsers)

let sales = [
    {customer: "Patrick", amountPaid: 50000, branch: "Maganjo"},
    {customer: "Kitsa", amountPaid: 50000, branch: "Maganjo"},
    {customer: "Graceiux", amountPaid: 50000, branch: "Gulu"},
    {customer: "Yhaya", amountPaid: 50000, branch: "Akashia Inn"},
    {customer: "Daniel", amountPaid: 50000, branch: "Sherembu"},
]

let branches = sales.map((sales)=> sales.branch)



let uniqueBranches = new Set(branches)
console.log (uniqueBranches)

if (uniqueBranches.has("Akashia Inn")){
    console.log ("This is a teenagers pub")
} else {
    console.log ("This can be good")
}