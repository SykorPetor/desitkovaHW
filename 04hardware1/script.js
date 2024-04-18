let out = document.getElementById("out")

function numBin() {
    let num = document.getElementById("in").value
    let proOut = num
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
            out.innerHTML = (`${proOut} v dvojkové soustavě: ${bin}`)
            break;
        }
    };
}

function binNum() {
    let bin = document.getElementById("in").value
    let num = 0;
    let index = bin.length;

    for (let j = 0; j < bin.length; j++) {
        num += (Number(bin[j]) * (2 ** (index - 1)))
        index -= 1
    }

    out.innerHTML = (`${bin} v desítkové soustavě: ${num}`)

}

