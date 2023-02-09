document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "calculate_1") {
                //console.log('button 1');
                calculateMonthlyInvestments()
            }else if (this.getAttribute("data-type") === "calculate_2") {
                //console.log('button 2');
                calculateRetirementFundAmount() 
            } else {
                alert(`Unknown data tpye: ${data-type}`);
                throw `Unknown data type: ${data-type}. Abborting!`;
            }
        });
    }

    
    })


/**
 * Calculates how much money the investor should invest on a monthly basis in order to
 * achieve desired amount of money in retirement.
 */
function calculateMonthlyInvestments() {
    let moneyInRetirement = parseInt(document.getElementById('money_in_retirement').value);
    let yearsUntilRetirement = parseInt(document.getElementById('years_until_retirement').value);
    let interestRate = document.getElementById('interest_rate').value;

    let monthlyInvestments = (moneyInRetirement * (interestRate/12)) / (((1+ interestRate/12)**(yearsUntilRetirement*12))-1);
    
    let html = `
        <p>You should invest each month ${monthlyInvestments} units of currency, in order to
        have in ${yearsUntilRetirement} years ${moneyInRetirement} amount of your retirement fund. Check
        the next tab for more info.</p>
    `;

    let response = document.getElementById('response1');
    response.innerHTML= html;

}

/**
 * Calculates how much money the investor should approximately receive in the retirement
 * if he will invest selected amount of money on a monntly basis
 */

function calculateRetirementFundAmount() {

    let monthlyInvestmets2 = parseInt(document.getElementById('monthly_investments').value);
    let yearsUntilRetirement2 = parseInt(document.getElementById('years_until_retirement_2').value);
    let interestRate2 = parseFloat(document.getElementById('interest_rate_2').value);

    let moneyInRetirement2 = ((((1 + (interestRate2/12))**(yearsUntilRetirement2 * 12))-1) / (interestRate2/12)) * monthlyInvestmets2;
    
    let html = `
        <p>If you invest each month ${monthlyInvestments2} units of currency for ${yearsUntilRetirement} years,
        you could probably have ${moneyInRetirement2} amount in your retirement fund. Check
        the next tab for more info.</p>
    `;

    let response = document.getElementById('response2');
    response.innerHTML= html;

}


