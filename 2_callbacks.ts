// When you nest function inside a function as an argument, then it is called a callback
// in simple terms, it creates a connection between two functions
// Keep in mind that javascript runs from top to bottom, but in callbacks order matters
// the order in which our functions have been placed

let func_one = (func_two: () => void) => {
  func_two()
  console.log("Function one has been invoked")
}

let func_two = () => {
  func_three()
  console.log("Function two has been called")
}

let func_three = () => {
  console.log("Function three has been called")
}

func_one(func_two)

// here the function three will be called first since the order of the code which is
// invoking the function one is making it go into other function which makes the function
// go into third function which will be finished first and then will return to the function two
// which after execution will return to function one and hence function one will completed
