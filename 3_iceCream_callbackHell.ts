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

// Callback hell has been created it looks like the following visually
const production = (): void => {
  setTimeout(()=>{
    console.log("Production has been started")
    setTimeout(()=>{
      console.log("Fruits have been chopped")
      setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
        setTimeout(()=>{
          console.log("The machine was started")
          setTimeout(()=>{
            console.log(`${stocks.holder[0]} was selected`)
            setTimeout(()=>{
              console.log(`${stocks.toppings[0]} has been added as toppings`)
              setTimeout(()=>{
                console.log("Ice cream has been served")
              },1000)
            },2000)
          },2000)
        },1000)
      },1000)
    },2000)
  },1000)
}

order(2, production)

// Solution? Promises
// Callbacks make relationships, parents, childrens etc


//Callbacks code looks like as follows

//////
///////
///////////
///////////////
////////////////////
///////////////
///////////
//////
///


// Promises code looks neat and looks like as follows

//////////////////////////////////
//// //////////////////////////
//// //////////////////////////
//// //////////////////////////
//// //////////////////////////

// it will instruct like as follows.
// first do this, then this, then this and etc
// code hence becomes maintable


// we have to keep 4 things in mind
// Relationship between time and work
// Promise chaining ie., return, return
// Error handling
// The .finally handler
