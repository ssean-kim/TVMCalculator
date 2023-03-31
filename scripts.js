function future_single(y,r,p) {
    return ((1 + parseFloat(r)) ** y) * p
}

function present_single(y,r,p) {
    return p / ((1 + parseFloat(r)) ** y)
}

function future_annuity(y,r,p) {
    return p * ((1 + parseFloat(r)) ** (y * 12) - 1) / r
}

function present_annuity(y,r,p) {
    return p * ((1 - (1 + parseFloat(r)) ** (-1 * y * 12))) / r
}

function calculate() {

    const y = document.getElementById("year").value || 0
    const r = document.getElementById("ir").value || 0
    const p = document.getElementById("roi").value || 0

    if(document.getElementById("fvsa").checked) {
        document.getElementById("display").value = future_single(y,r / 100,p).toFixed(2)
    } else if(document.getElementById("pvsa").checked) {
        document.getElementById("display").value = present_single(y,r / 100,p).toFixed(2)
    } else if(document.getElementById("fvoa").checked) {
        document.getElementById("display").value = future_annuity(y,r / 100,p).toFixed(2)
    } else if(document.getElementById("pvoa").checked) {
        document.getElementById("display").value = present_annuity(y,r / 100,p).toFixed(2)
    } else {
        alert("Please Select a Type of Investment")
    }
}