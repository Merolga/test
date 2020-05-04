'use sctrict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let appData = {
    money : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let article = prompt("Введите обязательную статью расходов в этом месяце","");
let sumArticle = prompt("Во сколько обойдется?","");
let article1 = prompt("Введите обязательную статью расходов в этом месяце","");
let sumArticle1 = prompt("Во сколько обойдется?","");

appData.expenses[article] = sumArticle;
appData.expenses[article1] = sumArticle1;

alert ("Ваш бюджет на 1 день: " + money/30 + " рублей.");

console.log(appData);
console.log(appData.expenses);