function updateRate(){
    const reteval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = reteval;
}

function compute(){
    const principal = parseInt(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const year = parseInt(document.getElementById("years").value);
    const interest = principal * year * rate / 100;
    const amount = principal + interest;
    const convertYears = new Date().getFullYear() + year;

    if (!principal || principal < 0) {
        alert("Enter a positive number");
        return;
    } else{
        const result = document.getElementById("result");
        result.innerHTML = `if you deposite $<mark>${interest}</mark> at an interest rate of <mark>${rate}</mark> you will receive an amount of $ <mark>${amount}</mark>in the year<mark>${convertYears}</mark>` 
    }

    document.getElementById("principal").focus();
}
