const arr = new Array()
const arr2 = new Array(true, "Igor", 21, new Array(2,4,10))
arr[1] = "Igor"
arr[0] = 40
console.log(arr)
console.log(arr2[3][arr2[3].length -1])

const arr3 = ["Igor", 30, [3,6,9], true]
arr3[4] = "a"
arr3[arr3.length] = "b"
arr3.push("push")
arr3.push("a", "b", "c")

console.log(arr3)
console.log(arr3[2])
console.log(arr3[2][0])
console.log(arr3)