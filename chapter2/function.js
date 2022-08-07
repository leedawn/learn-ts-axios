function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
var result1 = buildName('Bob'); // Error, 参数过少
var result2 = buildName('Bob', 'Adams', 'Sr.'); // Error, 参数过多
var result3 = buildName('Bob', 'Adams');
