let a = 6
// using reduce method calculate the factorial of numbr
function factorial(numbers) {
    let arr = Array.from(Array(numbers + 1).keys())
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b) => {
        return a*b


    })
    console.log(c)

}
factorial(a)

// using for loop

function facFor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac

}

console.log(facFor(a))