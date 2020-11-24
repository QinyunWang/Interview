const addHelper = (x, y, z) => {
  return x + y + z
}

const add = (...args) => {
  if (args.length >= addHelper.length) {
    return addHelper(...args)
  }

  return (...args2) => {
    return add(...args, ...args2)
  }
}

console.log(add(1, 2, 3))
console.log(add(1)(2)(3))
console.log(add(1, 2)(3))
console.log(add(1)(3, 2))
