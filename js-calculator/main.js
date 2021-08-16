function calculator() {
    const input1 = document.getElementById("number1");
    const input2 = document.getElementById("number2");       
    const select = document.getElementById("selectId").value;
    let p = document.getElementById("text"); 
    let newInput1 = parseFloat(input1.value);
    let newInput2 = parseFloat(input2.value);
    if (newInput1 > 0 && newInput2 > 0) {
        if (select == 'add') {
            p.innerText = newInput1 + newInput2;
        }
        if (select == 'sub') {
        p.innerText = newInput1 - newInput2;
        }
        if (select == 'mul') {
        p.innerText = newInput1 * newInput2;
        }
        if (select == 'div') {
        p.innerText = newInput1 / newInput2;
        }
    }
    input1.value = "";
    input2.value = "";
}