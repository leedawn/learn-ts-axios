
function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName
}

let result1 = buildName('Bob') // Error, 参数过少
let result2 = buildName('Bob', 'Adams', 'Sr.') // Error, 参数过多
let result3 = buildName('Bob', 'Adams')
