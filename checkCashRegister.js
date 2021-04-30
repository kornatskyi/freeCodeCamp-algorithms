"use strict";

/**
 * Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
 */


function checkCashRegister(price, cash, cid) {
    let saveCid = cid.map(arr => [...arr]);
    let changeAbsolute = cash - price;
    let change = 0;
    let values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    let recLevel = 0;
    let changeToFille = changeAbsolute - change;
    let n = 0;
    let i = 0;
    cid.reverse();
    while (change < changeAbsolute && n < values.length) {
        if ((Math.round(changeToFille * 10000) / 10000) >= values[n] && cid[n][1] > 0) {
            change = (Math.round(change * 10000) / 10000) + values[n];
            changeToFille = (Math.round(changeToFille * 10000) / 10000) - values[n];
            cid[n][1] = (Math.round(cid[n][1] * 10000) / 10000) - values[n];
        } else {
             n++;
        }
        i++;
        if (i > 100) {
            return change
        }
    }
    cid.reverse();
    if (cid.every(c => c[1] === 0) && Math.round(change * 10000) / 10000 === changeAbsolute) {
        return {
            status: "CLOSED",
            change: saveCid.filter((C, index) => {

                if (C[1] === cid[index][1]) {
                    C[1] = 0;
                    return true;
                } else {
                    C[1] = C[1] - cid[index][1];
                    C[1] = (Math.round(C[1] * 10000) / 10000);
                    return true;
                }
            })
        }
    } else if (Math.round(change * 10000) / 10000 === changeAbsolute) {
        return {
            status: "OPEN", change: saveCid.filter((C, index) => {

                if (C[1] === cid[index][1]) {

                    return false;
                } else {
                    C[1] = C[1] - cid[index][1];
                    C[1] = (Math.round(C[1] * 10000) / 10000);
                    return true;
                }
            }).reverse()
        }
    } else if (change < changeAbsolute) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }

    }
    return change;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


