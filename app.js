const btns = document.querySelectorAll(".btn");
operator = document.getElementById("+");
operator2 = document.getElementById("-");
operator3 = document.getElementById("*");
operator4 = document.getElementById("/");
dotOperator = document.getElementById(".");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let input = btn.getAttribute('id');
        document.getElementById('calc').innerText += input;
        operator.disabled = false;
        operator2.disabled = false;
        operator3.disabled = false;
        operator4.disabled = false;
    });
});

document.getElementById("reset").onclick = function() { myFunction() };

function myFunction() {
    document.getElementById('calc').innerText = "";
    document.getElementById('answer').innerText = "";
    operator.disabled = false;
    operator2.disabled = false;
    operator3.disabled = false;
    operator4.disabled = false;
    dotOperator.disabled = false;
}

document.getElementById("equal").onclick = function() { myFunction2() };

function myFunction2() {
    document.getElementById('answer').innerText = eval(document.getElementById('calc').innerText);
    document.getElementById('calc').innerText = "";
    dotOperator.disabled = false;
}


operator.onclick = function() { operatorFunction() };

function operatorFunction() {
    operator.disabled = true;
    operator2.disabled = true;
    operator3.disabled = true;
    operator4.disabled = true;
    dotOperator.disabled = false;
}
operator2.onclick = function() { operatorFunction2() };

function operatorFunction2() {
    operator.disabled = true;
    operator2.disabled = true;
    operator3.disabled = true;
    operator4.disabled = true;
    dotOperator.disabled = false;
}
operator3.onclick = function() { operatorFunction3() };

function operatorFunction3() {
    operator.disabled = true;
    operator2.disabled = true;
    operator3.disabled = true;
    operator4.disabled = true;
    dotOperator.disabled = false;
}
operator4.onclick = function() { operatorFunction4() };

function operatorFunction4() {
    operator.disabled = true;
    operator2.disabled = true;
    operator3.disabled = true;
    operator4.disabled = true;
    dotOperator.disabled = false;
}
dotOperator.onclick = function() { dotFunction() };

function dotFunction() {
    dotOperator.disabled = true;
}

document.getElementById("del").onclick = function() { deleteFunction() };

function deleteFunction() {
    let delString = document.getElementById('calc').innerHTML;
    let text = delString.substring(0, delString.length - 1);
    document.getElementById('calc').innerHTML = text;
    let operatorSolution = document.getElementById('calc').innerHTML;
    figure = operatorSolution.slice(-1);
    if (figure == "+" || figure == "-" || figure == "*" || figure == "/") {
        operator.disabled = true;
        operator2.disabled = true;
        operator3.disabled = true;
        operator4.disabled = true;
    } else {
        operator.disabled = false;
        operator2.disabled = false;
        operator3.disabled = false;
        operator4.disabled = false;
    }

}

document.getElementById('firstSwitch').onclick = function() { firstSwitch() };

function firstSwitch() {
    document.getElementById('body').style.backgroundColor = "hsl(222, 26%, 31%)";
    document.getElementById('output').style.backgroundColor = "hsl(224, 36%, 15%)";
    document.getElementById('input').style.backgroundColor = "hsl(223, 31%, 20%)";
    document.getElementById('calc').style.color = "white";
    document.getElementById('answer').style.color = "white";
    document.getElementById('colorId').style.color = "white";
    document.getElementById('themeId').style.color = "white";

    var elements = document.getElementsByClassName('btn');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
        elements[i].style.color = 'hsl(221, 14%, 31%)';
        elements[i].style.boxShadow = '0px 3px 1px hsl(28, 16%, 65%)';
    }

    var elements2 = document.getElementsByClassName('circle');
    for (var i = 0, length = elements2.length; i < length; i++) {
        elements2[i].style.backgroundColor = 'hsl(6, 63%, 50%)';
        elements2[i].style.color = 'white';
    }

    document.getElementById("del").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("reset").style.backgroundColor = "hsl(225, 21%, 49%)";
    document.getElementById("equal").style.backgroundColor = "hsl(6, 63%, 50%)";
    document.getElementById("del").style.boxShadow = "0px 3px 1px hsl(224, 28%, 35%)";
    document.getElementById("reset").style.boxShadow = "0px 3px 1px hsl(224, 28%, 35%)";
    document.getElementById("equal").style.boxShadow = "0px 3px 1px hsl(6, 70%, 34%)";

}



document.getElementById('secondSwitch').onclick = function() { secondSwitch() };

function secondSwitch() {
    document.getElementById('body').style.backgroundColor = "hsl(0, 0%, 90%)";
    document.getElementById('output').style.backgroundColor = "hsl(0, 0%, 93%)";
    document.getElementById('input').style.backgroundColor = "hsl(0, 5%, 81%)";
    document.getElementById('calc').style.color = "black";
    document.getElementById('answer').style.color = "black";
    document.getElementById('colorId').style.color = "black";
    document.getElementById('themeId').style.color = "black";

    var elements = document.getElementsByClassName('btn');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
        elements[i].style.color = 'black';
        elements[i].style.boxShadow = '0px 3px 1px hsl(35, 11%, 61%)';
    }

    var elements2 = document.getElementsByClassName('circle');
    for (var i = 0, length = elements2.length; i < length; i++) {
        elements2[i].style.backgroundColor = 'hsl(25, 98%, 40%)';
        elements2[i].style.color = 'white';
    }

    document.getElementById("del").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("reset").style.backgroundColor = "hsl(185, 42%, 37%)";
    document.getElementById("equal").style.backgroundColor = "hsl(25, 98%, 40%)";
    document.getElementById("del").style.boxShadow = "0px 3px 1px hsl(185, 58%, 25%)";
    document.getElementById("reset").style.boxShadow = "0px 3px 1px hsl(185, 58%, 25%)";
    document.getElementById("equal").style.boxShadow = "0px 3px 1px hsl(25, 99%, 27%)";

}

document.getElementById('thirdSwitch').onclick = function() { thirdSwitch() };

function thirdSwitch() {
    document.getElementById('body').style.backgroundColor = "hsl(268, 75%, 9%)";
    document.getElementById('output').style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById('input').style.backgroundColor = "hsl(268, 71%, 12%)";
    document.getElementById('calc').style.color = "yellow";
    document.getElementById('answer').style.color = "yellow";
    document.getElementById('colorId').style.color = "yellow";
    document.getElementById('themeId').style.color = "yellow";

    var elements = document.getElementsByClassName('btn');
    for (var i = 0, length = elements.length; i < length; i++) {
        elements[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
        elements[i].style.color = 'yellow';
        elements[i].style.boxShadow = '0px 3px 1px hsl(290, 70%, 36%)';
    }

    var elements2 = document.getElementsByClassName('circle');
    for (var i = 0, length = elements2.length; i < length; i++) {
        elements2[i].style.backgroundColor = 'hsl(176, 100%, 44%)';
        elements2[i].style.color = 'white';
    }

    document.getElementById("del").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("reset").style.backgroundColor = "hsl(281, 89%, 26%)";
    document.getElementById("equal").style.backgroundColor = "hsl(176, 100%, 44%)";
    document.getElementById("del").style.boxShadow = "0px 3px 1px hsl(285, 91%, 52%)";
    document.getElementById("reset").style.boxShadow = "0px 3px 1px hsl(285, 91%, 52%)";
    document.getElementById("equal").style.boxShadow = "0px 3px 1px hsl(177, 92%, 70%)";

}