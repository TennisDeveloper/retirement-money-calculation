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

}

/**
 * Calculates how much money the investor should approximately receive in the retirement
 * if he will invest selected amount of money on a monntly basis
 */

function calculateRetirementFundAmount() {
    
}


