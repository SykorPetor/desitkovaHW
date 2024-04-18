let out = document.getElementById("out")

function binSum() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value


    let num = (binNum(num1) + binNum(num2))
    let numI;
    let bin = [];

    
    for (let i = 0; i <= 1;) {
        numI = num % 2;
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = (num - 1) / 2
        }
        bin.unshift(numI);
        if (num < 1) {
            out.innerHTML = (bin)
            break;
        }
    };

}

function binNum(element) {
    let num = 0;
    let index = element.length;

    for (let j = 0; j < element.length; j++) {
        num += (Number(element[j]) * (2 ** (index - 1)))
        index -= 1
    }

    return num;

}