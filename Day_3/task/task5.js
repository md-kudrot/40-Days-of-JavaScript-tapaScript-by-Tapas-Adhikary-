let DailyUnitCost = 150  ;

let MonthLyUnitCost = DailyUnitCost * 30 ;

let annualPayment = MonthLyUnitCost * 12 ;

let discountAnualPayment = annualPayment * 0.2;

let mainAnualPrement = annualPayment - discountAnualPayment

console.log(mainAnualPrement + " rupees will you be charged for an annual payment")