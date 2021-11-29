const stocks = {
  fruits: ["strawberry", "banana", "oranges", "guava"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
}

let isShopOpen = true

const order = (time: number, work: () => void): any => {
  const promise = new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work())
      }, time)
    } else {
      reject(console.log("Our shop has been closed"))
    }
  })
  return promise
}

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() =>
    order(2000, () => console.log(`${stocks.liquid[0]} has been chosen`))
  )
  .then(() => {
    return order(3000, () => {
      console.log("the machine has started to work")
    })
  })
  .then(() => {
    return order(1000, () => console.log(`${stocks.holder[0]} is selected`))
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.toppings[0]} has been added as toppings`)
    )
  })
  .then(() => order(2000, () => console.log("Ice cream has been served")))
  .then(() => {
    isShopOpen = false
  })
  .then(() => {
    return order(2000, () =>
      console.log("Ops, I forgot to buy more Icecreams.")
    ) //this won't run now and catch will be executed
  })
  .catch(() => {
    console.log("Customer has left")
  })
  .finally(() => {    // finally executes whether promise is rejected or accepted
    console.log("day ended, our shop is closed")
  })
  .then(() => {
    isShopOpen = true
  })
  .finally(() => {
    console.log("I am opening this shop for you only.")
    isShopOpen = false
  })
  .then(() => {
    return order(2000, () => console.log("Customer leaves with happy face")) //this won't run now and catch will be executed
  })
