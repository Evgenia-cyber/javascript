//functions
//Function Declaration
function greet(name) {
    console.log(`Hello${name}`)
}
//greet('Ann')

//Function Expression
 const greet2 = function (name) {
   console.log(`Hello2 ${name}`) 
}
//greet2('Ann')

//console.log(typeof greet)
//console.dir(greet)

//as many parameters as you like
function sumAll (...all) {
    let res = 0;
    for (let num of all){
        res += num
    }
    return res
}
//const res = sumAll(1,2,3)
//console.log(res)

//Замыкание - это когда из одной функции возвращаем другую функцию,сохраняя 
//некий контекст.Используется для инкапсуляции переменных,т.к. в JS нет 
//такого нативного механизма
function createMember(name) {
    return function (lastName) {
        console.log(name+lastName)
    }
}
//const login = createMember('Vlad ')
//console.log(login('Minin'))