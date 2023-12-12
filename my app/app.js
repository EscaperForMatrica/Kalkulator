const resultName = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('button1')
const plusSubmit = document.getElementById('plus')
const minusSubmit = document.getElementById('minus')
const delenieSubmit = document.getElementById('delenie')
const umnojitSubmit = document.getElementById('umnojit')
let action = '+'

plusSubmit.onclick = function () {
    action = '+'
}


minusSubmit.onclick = function () {
    action = '-'
}


delenieSubmit.onclick = function () {
    action = '/'
}


umnojitSubmit.onclick = function () {
    action = '*'
}

submit.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        resultName.textContent = sum
    }else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        resultName.textContent = sum
    }else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        resultName.textContent = sum
    }else if(action == '*') {
        const sum = Number(input1.value) * Number(input2.value)
        resultName.textContent = sum
    }
}
