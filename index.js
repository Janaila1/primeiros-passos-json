//JSON - JavaScript Object Notation - Agrupa dados dentro do mesmo contexto, como se fosse caixinhas.
// Chave e valor com o objetivo de transferir dados

let name = "Janaila"
let age = 35
let products = ["mouse 2xwm", "teclao mecânico", " monitor"]
let productsValues = [29.90, 129.89, 899.99]


generateInvoice(name, products, age)

function generateInvoice(name, products, age){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("---------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}



//Declarando JSON

let invoice = {
    name: "Janaila", 
    age: 35,
    products:  ["Mouse 2xwm", "Teclado mecânico", " Monitor"]

}

console.log(invoice)


// Exemplo chave e valor Json
let Invoice = {
    name: "Janaila", 
    age: 35,
    products: {
        0: ["Mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.89],
        2: ["Monitor", 899.99]

    } 

}

console.log(Invoice.name)


//Mais prático e fácil
let InVoice = {
    name: "Janaila", 
    age: 35,
    products: {
        0: ["Mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.89],
        2: ["Monitor", 899.99]

    },
    taxes: "98.90"

}

generateInvoice(InVoice)

//Interpolação de Strings usando crase
function generateInvoice(InVoice){
    console.log(`O comprador é  ${InVoice.name}`)
    console.log(`A idade é ${InVoice.age}`)
    console.log("---------")
//percorrendo lista
    for (let index in InVoice.products){
        let [productName, productPrice] = InVoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
   
}