
// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/

const Y = 30;
// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate.
Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12.
Create another variable called `periods` and give it the value of years*12.
*/

const mnths = Y * 12;
// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.
Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator
Hint #2: you'll need to use the `math` object for parts of this calculation!
When your math is correct, monthlyRate will equal 1073.64
*/

function Calc(P, I)
{
    let mIr = I/12;
    let numer = mIr * Math.pow( ( 1 + mIr ), mnths );
    let denom = Math.pow((mIr  + 1 ), mnths)-1;
    const monthlyRate = P * ( numer / denom );
    console.log(`monthly rate ${monthlyRate}`);
}

Calc(200000, 0.05);



function mortgageCalc(P, I, CS, N)
{
    if(CS>740) {
        I = I - 0.005;}
        else if(CS<660) {
            I = I + 0.005;
        } else {
            I = I;
        }
    let mIr = I/12;
    let numer = mIr * Math.pow( ( 1 + mIr ), mnths );
    let denom = Math.pow( (mIr  + 1 ), mnths)-1;
    const monthlyRate = Math.round(P * ( numer / denom ));
    return `${N}, your monthly rate is ${monthlyRate}`;
}

console.log(mortgageCalc(200000, 0.05, 645, 'Damon'));



// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/




// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/





// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/




// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.
*/
function varMortgageCalc(P, I, N) {
    for(i= I-0.02; i<=I+0.02; i+=0.005) {
        let mIr = i/12;
        let numer = mIr * Math.pow( ( 1 + mIr ), mnths );
        let denom = Math.pow( (mIr  + 1 ), mnths)-1;
        const monthlyRate = Math.round(P * ( numer / denom ));
        console.log(`${N}, at an interest rate of ${mIr}, your monthly rate will be ${monthlyRate}`);
        }
    }

    varMortgageCalc(200000, 0.05, "Damon");

/*
For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/




// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

document.addEventListener( 'click', mortCalc( "Damon" ) );
