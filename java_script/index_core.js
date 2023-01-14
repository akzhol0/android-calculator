let rn_number = '';
let move, res;
let first_number, second_number;

function seven() {
    rn_number += '7';
    document.getElementById('res').innerHTML = rn_number;  
}

function eight() {
    rn_number += '8';
    document.getElementById('res').innerHTML = rn_number;
}

function six() {
    rn_number += '6';
    document.getElementById('res').innerHTML = rn_number;
}

function nine() {
    rn_number += '9';
    document.getElementById('res').innerHTML = rn_number;
}

function five() {
    rn_number += '5';
    document.getElementById('res').innerHTML = rn_number;
}

function four() {
    rn_number += '4';
    document.getElementById('res').innerHTML = rn_number;
}

function three() {
    rn_number += '3';
    document.getElementById('res').innerHTML = rn_number;
}

function two() {
    rn_number += '2';
    document.getElementById('res').innerHTML = rn_number;
}

function one() {
    rn_number += '1';
    document.getElementById('res').innerHTML = rn_number;
}

function ac() {
    rn_number = '';
    document.getElementById('res').innerHTML = rn_number;
}

function percent() {
    rn_number /= 100;
    document.getElementById('res').innerHTML = rn_number;
}

function zero() {
    rn_number += '0';
    document.getElementById('res').innerHTML = rn_number;
}

function dot() {
    rn_number += '.';
    document.getElementById('res').innerHTML = rn_number;
}

function add_minus() {
    rn_number += '-';
    document.getElementById('res').innerHTML = rn_number;
}

function divide() {
    move = 1;
    first_number = rn_number;
    rn_number = '';
}

function plus() {
    move = 2;
    first_number = rn_number;
    rn_number = '';
}

function multiply() {
    move = 3;
    first_number = rn_number;
    rn_number = '';
}

function minus() {
    move = 4;
    first_number = rn_number;
    rn_number = '';
}

function error() {
    if (rn_number.length > 10) {
        document.getElementById('res').innerHTML = 'Error!';
        rn_number = '';
    }
}

function equals() {
    second_number = rn_number;
    rn_number = '';

    if (move === 1) {
        res = (first_number * 1) / (second_number * 1)
        document.getElementById('res').innerHTML = res;
    } else if (move === 2) {
        res = (first_number * 1) + (second_number * 1)
        document.getElementById('res').innerHTML = res;
    } else if (move === 3) {
        res = (first_number * 1) * (second_number * 1)
        document.getElementById('res').innerHTML = res;
    } else if (move === 4) {
        res = (first_number * 1) - (second_number * 1)
        document.getElementById('res').innerHTML = res;
    } else {
        document.getElementById('res').innerHTML = 'Error!';
    }
}