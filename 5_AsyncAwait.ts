// Async await is better way to write promises
 const stocks = {
  fruits: ["strawberry", "banana", "oranges", "guava"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

const toppings_choice = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(console.log("Which topping do you like ? "))
    },3000)
  })
}


const kitchen = async (): Promise<void> | undefined => {
  console.log(" A ")
  console.log(" B ")
  console.log(" C ")

  await toppings_choice()
  //following will run only after when toppings_choice promise will be returned
  console.log(" D ") 
  console.log(" E ")
  console.log(" F ")
}

kitchen()

// following will run as expected and when response from promise in kitchen() will come then function from that line and downwards
// will be calculated

console.log("doing the dishes")
console.log("cleaning the tables")


// RESULTS

// A 
// B
// C
// doing the dishes
// cleaning the tables
// which topping do you like?
// D
// F