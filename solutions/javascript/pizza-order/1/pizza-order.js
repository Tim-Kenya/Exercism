/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {

  const basePrice = 
    pizza === "Margherita" ? 7 :
    pizza === "Caprese" ? 9 :
    pizza === "Formaggio" ? 10 : 
    0;

  if (extras.length === 0) return basePrice;
  
  const [first, ...rest] = extras;
  const extraCost = 
    first === "ExtraSauce" ? 1 :
    first === "ExtraToppings" ? 2 : 
    0;

  return extraCost + pizzaPrice(pizza, ...rest);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalCost = 0;
  
  for (const order of pizzaOrders) {
    const pizzaPrice =
      order.pizza === "Margherita" ? 7 :
      order.pizza === "Caprese" ? 9 :
      order.pizza === "Formaggio" ? 10 : 
      0;

    let extrasCost = 0;
  if (order.extras) {
    for (const extra of order.extras){
      extrasCost += 
        extra === "ExtraSauce" ? 1 :
        extra === "ExtraToppings" ? 2 : 
        0;
    }
  }
    totalCost += pizzaPrice + extrasCost;
  }

  return totalCost;
}

