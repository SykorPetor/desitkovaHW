function provedOperace() {
    // Získání hodnoty z políček
    var mnozinaA = new Set(document.getElementById("mnozinaA").value.split(',').map(Number));
    var mnozinaB = new Set(document.getElementById("mnozinaB").value.split(',').map(Number));
    var mnozinaC = new Set(document.getElementById("mnozinaC").value.split(',').map(Number));

    // Operace s množinami
    var prunik_AC = new Set([...mnozinaA].filter(x => mnozinaC.has(x)));
    var sjednoceni_AB = new Set([...mnozinaA, ...mnozinaB]);
    var doplnek_A_v_B = new Set([...mnozinaB].filter(x => !mnozinaA.has(x)));

    // Výstup
    var vysledkyDiv = document.getElementById("vysledky");
    vysledkyDiv.innerHTML = "<strong>Výsledky:</strong><br>";
    vysledkyDiv.innerHTML += "Průnik množiny A a množiny C: " + Array.from(prunik_AC).join(", ") + "<br>";
    vysledkyDiv.innerHTML += "Sjednocení množiny A a množiny B: " + Array.from(sjednoceni_AB).join(", ") + "<br>";
    vysledkyDiv.innerHTML += "Doplněk množiny A vzhledem k množině B: " + Array.from(doplnek_A_v_B).join(", ") + "<br>";
}