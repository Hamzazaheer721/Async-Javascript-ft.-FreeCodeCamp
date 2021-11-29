const stocks = {
  fruits: ["strawberry", "banana", "oranges", "guava"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

let isShopOpen = true

const time = (ms: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms)
    } else {
      reject(console.log("Shop is closed!"))
    }
  })
}

const kitchen = async (): Promise<void> => {
  try {
    await time(3000)
    console.log("Production has been started")
    await time(2000)
    console.log("Fruits have been chopped")
    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    await time(1000)
    console.log("The machine was started")
    await time(500)
    console.log(`${stocks.holder[0]} was selected`)
    await time(1000)
    console.log(`${stocks.toppings[0]} has been added as toppings`)
    await time(4000)
    console.log("Ice cream has been served")
  } catch (err) {
    console.log("Customer left", err)
  } finally {
    console.log("Day ended, shop is closed")
  }
}


const _kitchen = async (): Promise<void> => {
  try {
    await time(3000)
    console.log("2 => Production has been started")
    await time(2000)
    console.log("2 => Fruits have been chopped")
    await time(1000)
    console.log(`2 => ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
    await time(1000)
    console.log("2 =>The machine was started")
    await time(500)
    console.log(`2 => ${stocks.holder[0]} was selected`)
    await time(1000)
    console.log(`2 => ${stocks.toppings[0]} has been added as toppings`)
    await time(4000)
    console.log("2 => Ice cream has been served")
  } catch (err) {
    console.log("2 => Customer left", err)
  } finally {
    console.log("2 => Day ended, shop is closed")
  }
}


kitchen()
console.log("I am intermediate")
_kitchen()
setTimeout(()=>{
  console.log("I am post Timeout console")
},200)