'use strict';

var positions = [
    {
        title: 'Телепорт бытовой VZHIH-101',
        price: 10000,
        discount: 7,
        available: 3
    },
    {
        title: 'Ховерборд Mattel 2016',
        price: 9200,
        discount: 4,
        available: 14
    },
    {
        title: 'Меч световой FORCE (синий луч)',
        price: 57000,
        discount: 0,
        available: 1
    }
];


const finalPriceConfig = 
{
    get : function ()
    {
        return this.finalPrice = this.price - (this.price * this.discount / 100);
    },

    set : function (value) 
    {
        if (value < this.price) {
            this.discount = 100 - ((value * 100) / this.price);
        }
        if (value > this.price)
        {
            `Сумма должна быть меньше базовой цены - ${this.price}`;
        }
    },
}


// Функция для печати с-ва finalPrice
const finalPriceToString = function() {
    console.log(`Конечная цена ${positions[0].finalPrice} скидка ${positions[0].discount} %`);
}


for (let position of positions) {
    // discountItems.push(createDiscountItem(position)); 
    Object.defineProperty(position, 'finalPrice', finalPriceConfig); // добавилось не перечисляемое своейство
    position.finalPriceToString = finalPriceToString; // добавилось перечисляемое свойство.
}


positions[0].price = 2000;
positions[0].discount = 50;
positions[0].finalPriceToString();
positions[0].finalPrice = 1500;
positions[0].finalPriceToString();


console.log('\n' + positions[0].toString); // вернет строкове представление объекта
positions[0].toString(); // Выполнит непосредственно функцию
console.log(Object.keys(positions[0])); // Вернет перечисляеме свойства
console.log(Object.getOwnPropertyNames(positions[0])); // вернет все свойства


 /**
  * 
  * @param {positions[n]} Obj
  * @return function 
  */
function printPropsOfObj(Obj)
{
    console.log('Перечисляем свойства объекта :');
    for (var prop in Obj) {
        console.log("obj." + prop + " = " + Obj[prop]);
    }
}