const stocks = {
  fruits: ["strawberry", "banana", "oranges", "guava"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

const order = (firstName: number, call_production: () => void): void => {
  setTimeout(() => {
    console.log(`${stocks.fruits[firstName]} has been selected`)
     production()
  }, 2000)
}

const production = (): void => {
  setTimeout(()=>{
    console.log("Production has been started")
    setTimeout(()=>{
      console.log("Fruits have been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
      },1000)
    },2000)
  },1000)
}


order(2, production)
