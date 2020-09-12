//functions
//Function Declaration
function greet(name) {
    console.log(`Hello${name}`);
}
//greet('Ann')

//Function Expression
const greet2 = function (name) {
    console.log(`Hello2 ${name}`);
};
//greet2('Ann')

//console.log(typeof greet)
//console.dir(greet)

//as many parameters as you like
function sumAll(...all) {
    let res = 0;
    for (let num of all) {
        res += num;
    }
    return res;
}
//const res = sumAll(1,2,3)
//console.log(res)

//Замыкание - это когда из одной функции возвращаем другую функцию,сохраняя
//некий контекст.Используется для инкапсуляции переменных,т.к. в JS нет
//такого нативного механизма
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName);
    };
}
//const login = createMember('Vlad ')
//console.log(login('Minin'))

//arrays
const cars = ["Mazda", "Ford", "BMW"];
cars.push("Ferrary");
cars.unshift("Reno");
const firstItem = cars.shift();
const lastItem = cars.pop();
cars.reverse(); //["BMW", "Ford", "Mazda"]

const text = "hello, world";
const reverceText = text.split("").reverse().join("");
//console.log(reverceText)//dlrow ,olleh

//console.log(cars.indexOf('BMW'))//0
//console.dir(cars[0])//BMW
//console.log(typeof cars[0])//string

//console.log(cars.includes('BMW'))//true
const upperCaseCars = cars.map((car) => car.toUpperCase());
//console.log(upperCaseCars)//["BMW", "FORD", "MAZDA"]
//console.log(cars)//["BMW", "Ford", "Mazda"]
const numbers = [-1, -2, 1, 2, 3, 4, 5, 6, 7];
const positive = (num) => num > 0;
const pow2 = (num) => num ** 2;
const changednNumbers = numbers.filter(positive).map(pow2).map(Math.sqrt);
//console.log(changednNumbers)//[1,2,3,4,5,6,7]
//console.log(numbers)//[-1,-2,1,2,3,4,5,6,7]

//objects in arrays
const mans = [
    {name: "Vlad", age: 26},
    {name: "Ivan", age: 25},
    {name: "Vova", age: 33},
];
//let findManOlder25
//for (const person of mans){
//    if(person.age>25){
//        findManOlder25 = person
//    }
//}
//console.log(findManOlder25)//{name: "Vova", age: 33} because loop return result
//of last iteration

const indexOfManOlder25 = mans.findIndex(function (person) {
    //console.log(person)
    return person.age > 25;
});
//console.log(indexOfManOlder25)//0 because return first of find indexes
//console.log(mans[indexOfManOlder25])//{name: "Vlad", age: 26}
const manOlder25 = mans.find(function (person) {
    return person.age > 25;
});
//console.log(manOlder25)//{name: "Vlad", age: 26}
const manOlder25ArrowFunction = mans.find((person) => person.age > 25);
//console.log(manOlder25ArrowFunction)//{name: "Vlad", age: 26}

const persons = [
    {name: "Vlad", salary: 26000},
    {name: "Ivan", salary: 25000},
    {name: "Vova", salary: 33000},
];
const allSalaries = persons.reduce((summ, person) => {
    summ += person.salary;
    return summ;
}, 0);
const allSalariesMore25000 = persons.reduce((summ, person) => {
    if (person.salary > 25000) {
        summ += person.salary;
    }
    return summ;
}, 0);
//console.log(allSalaries)//84000
//console.log(allSalariesMore25000)//59000
const allSalariesMore25000MoreAdvanced = persons
        .filter((person) => person.salary > 25000)
        .reduce((summ, person) => {
            summ += person.salary;
            return summ;
        }, 0);
//console.log(allSalariesMore25000MoreAdvanced); //59000

//Objects
//const person = {
//    name: 'Vlad',
//    age: 28,
//    isProgrammer: true,
//    languages: ['ru', 'eng'],
//    'complex key': 'complex value',
//    ['key_'+1+3]: 'complex key_13',//key_13
//    ['key_'+(1+3)]: 'complex key_4',//key_4
//    greet(){
//        console.log("Hello from greet function")
//    },
//}
//console.log(person.name)//Vlad
//console.log(person['age'])//28
//person.age++
//console.log(person['age'])//29
//console.log(person['complex key'])//complex value
//console.log(person['key_13'])//'complex key_13'
//delete person['key_13']
//delete person['key_4']
//delete person['complex key']
//person.languages.push('ukr')
//console.log(person.languages)//["ru", "eng", "ukr"]

//Деструктуризация. Новый синтаксис
//было
//const name = person.name
//const age = person.age
//const languages = person.languages
//console.log(name,age,languages)//Vlad 28 (2) ["ru", "eng"]
//стало
//const {name,age,languages} = person
//console.log(name,age,languages)//Vlad 28 (2) ["ru", "eng"]

//const {name,age:personAge = 20,languages} = person
//console.log(name, personAge, languages)//Vlad 28 (2) ["ru", "eng"]

//for(let key in person){
//    if(person.hasOwnProperty(key))
//    {console.log(key+': '+person[key])}
//}

//const result = Object.keys(person).forEach((key)=>console.log(`${key}: ${person[key]}`))

//Context this
const person = {
    name: 'Vlad',
    age: 28,
    isProgrammer: true,
    languages: ['ru', 'eng'],
    greet() {
        console.log("Hello from greet function")
    },
    info() {
//        console.info('Info about', person.name)
//        console.info('this', this)
        console.info('Info about', this.name)
    }
}
//person.info()

const logger = {
    keys() {
        console.log('keys', Object.keys(this))
    },
    keysAndValues() {
//1
        Object.keys(this).forEach(key =>
            console.log(`${key}: ${this[key]}`))
//2 
//        const context = this;
//        Object.keys(this).forEach(function (key)
//        {
//            console.log(`${key}: ${context[key]}`)
//        })
////3
//        Object.keys(this).forEach(function (key)
//        {
//            console.log(`${key}: ${this[key]}`)
//        }.bind(this))

    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----start-----')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}: ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('----------')
            }
        })
        if (bottom) {
            console.log('-----end-----')
    }
    }
}

//const keysFromPerson = logger.keys.bind(person)
//keysFromPerson()
//
//logger.keys.call(person)
//
//logger.keys.apply(person)


//logger.keysAndValues()
//logger.keysAndValues.call(person)

//logger.withParams.call(person)
//logger.withParams.call(person,true,true,true)
//logger.withParams.apply(person,[true,true,true])

//Асинхронность
//1
//const timeout = setTimeout(()=>{console.log('After 2500')}, 2500)
//clearTimeout(timeout)
//
//const interval = setInterval(()=>{console.log('Every second')}, 1000)

//const  delay = (callback, wait = 1000)=> {
//    setTimeout(callback,wait)
//}
//
//delay(()=>console.log("after 2 seconds"),2000)
//2
//const  delay =  (wait = 1000) => {
//    return  new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//            resolve()
//        }, wait)
//    })
//}
//
//delay(2000).then(
//        ()=>console.log('After 2 sec')
//        )
//        .catch(
//        err=>console.error(err)
//        )
//        .finally(
//        ()=>console.log('Finally')
//        )
//3
/*const  delay = (wait = 1000) => {
 return  new Promise((resolve, reject) => {
 setTimeout(() => {
 reject('Что-то пошло не так в setTimeout')
 }, wait)
 })
 }
 delay(2000).then(
 () => console.log('After 2 sec')
 )
 .catch(
 err => console.error('Ошибка: ', err)
 )
 .finally(
 () => console.log('Finally')
 )
 */
//1
//const getData = () =>  new Promise(resolve => 
//        resolve([1, 1, 2, 3, 5])
//    )
//getData().then(data => console.log(data))
//2
const  delay = (wait = 1000) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
           // resolve(console.log('ok'))
           reject('Что-то не так')
        }, wait)
    })
}
const getData = () => new Promise(resolve =>
        resolve([1, 1, 2, 3, 5])
    )
async function asyncExample() {
    try {
        await delay(2000)
        const data = await getData()
        console.log(data)
    } catch (err) {
        //console.error('Ошибка: ', err)
        console.log(err)
    } finally {
        console.log("finally")
    }
}
asyncExample()