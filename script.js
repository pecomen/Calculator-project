function appendToOutput(value) {
    document.getElementById("output").value += value;
}
function calculate(operator) {
    let output = document.getElementById("output").value;

    if (output !== "") {
        output = output.replace('÷', '/').replace('×', '*').replace('−', '-');
       
        let result = eval(output);

        if (isFinite(result)) {
            document.getElementById("output").value = result;
        } else {
            document.getElementById("output").value = "Error";
        }
    }
}
