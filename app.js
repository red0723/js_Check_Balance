'use strict';

function GetData() {
    let begBrackets = ["(", "<", "{", "["];
    let endBrackets = [")", ">", "}", "]"];
    let inputText = document.getElementById("inputId").value;
    var bb1= 0,bb2=0,bb3=0,bb4=0,eb1=0,eb2=0,eb3=0,eb4 = 0;
    if (inputText.length > 1) {
        for (let i = 0; i < inputText.length; i++) {

            if  (inputText.at(i) === begBrackets[0]) {
                bb1 += 1;
            } else if (inputText.at(i) === begBrackets[1]) {
                bb2 += 1;
            } else if (inputText.at(i) === begBrackets[2]) {
                bb3 += 1;
            } else if (inputText.at(i) === begBrackets[3]) {
                bb4 += 1;
            }else if  (inputText.at(i) === endBrackets[0]) {
                eb1 += 1;
            } else if (inputText.at(i) === endBrackets[1]) {
                eb2 += 1;
            } else if (inputText.at(i) === endBrackets[2]) {
                eb3 += 1;
            } else if (inputText.at(i) === endBrackets[3]) {
                eb4 += 1;
            }
        }
        let brackets = [bb1, eb1, bb2, eb2, bb3, eb3, bb4, eb4];
        var bt1 = false;
        var bt2 = false;
        var bt3 = false;
        var bt4 = false;
        for (let a = 0; a < brackets.length; a++) {
            if (brackets[a] === brackets[a + 1]) {
                switch (a) {
                    case 0:
                        bt1 = true;
                        break;
                    case 2:
                        bt2 = true;
                        break;
                    case 4:
                        bt3 = true;
                        break;
                    case 6:
                        bt4 = true;
                        break;
                }
            }
        }
        document.getElementById('bb1').innerHTML = '( = ' + bb1;
        document.getElementById('eb1').innerHTML = ') = ' + eb1;
        document.getElementById('bb2').innerHTML = '< = ' + bb2;
        document.getElementById('eb2').innerHTML = '> = ' + eb2;
        document.getElementById('bb3').innerHTML = '{ = ' + bb3;
        document.getElementById('eb3').innerHTML = '} = ' + eb3;
        document.getElementById('bb4').innerHTML = '[ = ' + bb4;
        document.getElementById('eb4').innerHTML = '] = ' + eb4;
        document.getElementById('bt1').innerHTML = 'Parenthesis are aligned = ' + bt1;
        document.getElementById('bt2').innerHTML = 'Attribute Operators are aligned = ' + bt2;
        document.getElementById('bt3').innerHTML = 'Curly Braces are aligned = ' + bt3;
        document.getElementById('bt4').innerHTML = 'Square Brackets are aligned = ' + bt4;
    } else {
        document.getElementById('answer').innerHTML = "Not enough characters to validate balance.";
    }
}
