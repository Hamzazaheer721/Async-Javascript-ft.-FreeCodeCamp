// async will let the other stuff complete their task while a task is being done

////////////////////////
///// Asynchronous ///
/////////////////////

console.log("I")

console.log("eat")

setTimeout(() => {
  console.log("ice-cream")
}, 3000)

console.log("with")

console.log("a spoon")
