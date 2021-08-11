

function addValue(){
    var operand1=document.getElementById("operands1").value;
    var operand2=document.getElementById("operands2").value;

    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    var result = val1 + val2;
    document.getElementById("text").value=operand1+"+"+operand2+"="+result;
}
function multiplyValue(){
    var operand1=document.getElementById("operands1").value;
    var operand2=document.getElementById("operands2").value;

    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    var result = val1 * val2;
    document.getElementById("text").value=operand1+"*"+operand2+"="+result;
}
function divideValue(){
    var operand1=document.getElementById("operands1").value;
    var operand2=document.getElementById("operands2").value;

    val1 = parseInt(operand1, 10);
    val2 = parseInt(operand2, 10);

    var result = val1 / val2;
    document.getElementById("text").value=operand1+"/"+operand2+"="+result;
}
