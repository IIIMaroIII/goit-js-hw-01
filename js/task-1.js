// function makeTransaction(quantity, pricePerDroid) {
//   return `You ordered ${quantity} droids worth ${pricePerDroid} credits!`;
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// Функція calculateTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх цілих
// чисел від одиниці до цього числа включно.Наприклад,
// якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// calculateTotal(1);
// calculateTotal(6);
// calculateTotal(24);

// Функція calculateEvenTotal(number) приймає ціле число(параметр number).
//  Доповни код функції так, щоб вона повертала суму всіх парних цілих
//   чисел від одиниці до цього числа включно.Парні числа — це ті,
//   що можна поділити на 2 без остачі(як це зробити розглядалося у
//     темі Арифметичні операції у модулі 1).Наприклад, якщо number дорівнює 6,
//   то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// calculateEvenTotal(1);
// calculateEvenTotal(3);
// calculateEvenTotal(7);

const start = 6;
const end = 20;
let number = 0;
for (let i = start; i < end; i++) {
  if (i % 5 === 0) {
    number += i;
    console.log(number);
    break;
  }
}
