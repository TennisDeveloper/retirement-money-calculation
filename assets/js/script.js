document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "calculate_1") {
                calculateMonthlyInvestments();
            } else if (this.getAttribute("data-type") === "calculate_2") {
                calculateRetirementFundAmount();
            } else {
                alert(`Unknown data type: ${data-type}`);
                throw `Unknown data type: ${data-type}. Abborting!`;
            }
        });
    }


});


/**
 * Calculates how much money the investor should invest on a monthly basis in order to
 * achieve desired amount of money in retirement.
 */
function calculateMonthlyInvestments() {
    let moneyInRetirement = parseInt(document.getElementById('money_in_retirement').value);
    let yearsUntilRetirement = parseInt(document.getElementById('years_until_retirement').value);
    let interestRate = parseFloat(document.getElementById('interest_rate').value);

    let monthlyInvestments = Math.floor((moneyInRetirement * (interestRate / 12)) / (((1 + interestRate / 12) ** (yearsUntilRetirement * 12)) - 1));

    let moneyInRetirementFormatted = Intl.NumberFormat().format(moneyInRetirement);
    let monthlyInvestmentsFormatted = Intl.NumberFormat().format(monthlyInvestments);

    let html = `
        <p>You should invest each month ${monthlyInvestmentsFormatted} units of currency, in order to
        have in ${yearsUntilRetirement} years ${moneyInRetirementFormatted} units of currency of your retirement fund. Check
        the next tab for more info.</p>
    `;


    if (yearsUntilRetirement === 1) {
        html = `
        <p>You should invest each month ${monthlyInvestmentsFormatted} units of currency, in order to
        have in ${yearsUntilRetirement} year ${moneyInRetirementFormatted} units of currency of your retirement fund. Check
        the next tab for more info.</p>
    `;
    }

    let response = document.getElementById('response1');

    response.innerHTML = html;

}

/**
 * Calculates how much money the investor should approximately receive in the retirement
 * if he will invest selected amount of money on a monntly basis
 */

function calculateRetirementFundAmount() {

    let monthlyInvestments2 = parseInt(document.getElementById('monthly_investments').value);
    let yearsUntilRetirement2 = parseInt(document.getElementById('years_until_retirement_2').value);
    let interestRate2 = parseFloat(document.getElementById('interest_rate_2').value);

    let moneyInRetirement2 = Math.floor(((((1 + (interestRate2 / 12)) ** (yearsUntilRetirement2 * 12)) - 1) / (interestRate2 / 12)) * monthlyInvestments2);

    let moneyInRetirement2Formatted = Intl.NumberFormat().format(moneyInRetirement2);
    let monthlyInvestments2Formatted = Intl.NumberFormat().format(monthlyInvestments2);

    let html_2 = `
        <p>If you invest each month ${monthlyInvestments2Formatted} units of currency for ${yearsUntilRetirement2} years,
        you could probably have ${moneyInRetirement2Formatted} units of currency in your retirement fund. Check
        the next tab for more info.</p>
    `;

    if (yearsUntilRetirement2 === 1) {
        html_2 = `
        <p>If you invest each month ${monthlyInvestments2Formatted} units of currency for ${yearsUntilRetirement2} year,
        you could probably have ${moneyInRetirement2Formatted} units of currency in your retirement fund. Check
        the next tab for more info.</p>
    `;
    }

    let response2 = document.getElementById('response2');
    response2.innerHTML = html_2;

}