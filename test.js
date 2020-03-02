// function add(a, b){
//   if(typeof a !== 'string' || typeof b !== 'string'){
//     throw new Error('Wrong type')
//   }
//   return a + b
// }

// try{
//   let result = add ('a', 1)
// }catch (error){
//   console.log(error)
// }

// console.log(result)

function reject(){
  return new Promise((resolve, reject) =>{
    reject(new Error("promise error"))
  })
}
reject().catch((error) =>{
  console.log('has error', error.message)
})
