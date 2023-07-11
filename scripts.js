document.getElementById('calculo').addEventListener('click', calculaNotas, false)

function calculaNotas() {
    var input_valor = document.getElementById('valorInput').value


    let valor = Number(input_valor)

    let notas_100 = 0
    let notas_50 = 0
    let notas_20 = 0
    let notas_10 = 0
    let notas_5 = 0
    let notas_2 = 0
    let notas_1 = 0
    let moedas_050 = 0
    let moedas_025 = 0
    let moedas_010 = 0
    let moedas_05 = 0

    if ((valor / 100) >= 1) {
        notas_100 = Math.floor(valor / 100)
        valor = valor % 100
    }

    if ((valor / 50) >= 1) {
        notas_50 = Math.floor(valor / 50)
        valor = valor % 50
    }

    if ((valor / 20) >= 1) {
        notas_20 = Math.floor(valor / 20)
        valor = valor % 20
    }

    if ((valor / 10) >= 1) {
        notas_10 = Math.floor(valor / 10)
        valor = valor % 10
    }

    if ((valor / 5) >= 1) {
        notas_5 = Math.floor(valor / 5)
        valor = valor % 5
    }

    if ((valor / 2) >= 1) {
        notas_2 = Math.floor(valor / 2)
        valor = valor % 2
    }

    if ((valor / 1) >= 1) {
        notas_1 = Math.floor(valor / 1)
        valor = valor % 1
    }

    if ((valor / 0.50) >= 1) {
        moedas_050 = Math.floor(valor / 0.50)
        valor = valor % 0.50
    }

    if ((valor / 0.25) >= 1) {
        moedas_025 = Math.floor(valor / 0.25)
        valor = valor % 0.25
    }

    if ((valor / 0.10) >= 1) {
        moedas_010 = Math.floor(valor / 0.10)
        valor = valor % 0.10
    }

    if ((valor / 0.05) >= 1) {
        moedas_05 = Math.floor(valor / 0.05)
        valor = valor % 0.05
    }

    if (notas_100 > 0) {
        document.getElementById('nota-100').innerHTML = '<img class="w-[80%]" src="https://upload.wikimedia.org/wikipedia/pt/6/61/Atual_c%C3%A9dula_de_100_reais_anverso.jpg" alt=""/>'
        document.getElementById('notas-100').innerText = notas_100 + " Nota(s) de R$100 Reais"
    }
    else {
        document.getElementById('nota-100').innerHTML = ''
        document.getElementById('notas-100').innerText = ''
    }

    if (notas_50 > 0) {
        document.getElementById('nota-50').innerHTML = '<img class="w-[80%]" src="https://upload.wikimedia.org/wikipedia/pt/d/db/Anverso_da_c%C3%A9dula_de_50_reais.PNG" alt=""/>'
        document.getElementById('notas-50').innerText = notas_50 + " Nota(s) de R$50 Reais"
    }
    else {
        document.getElementById('nota-50').innerHTML = ''
        document.getElementById('notas-50').innerText = ''
    }

    if (notas_20 > 0) {
        document.getElementById('nota-20').innerHTML = '<img class="w-[80%]" src="https://upload.wikimedia.org/wikipedia/pt/d/d9/Anverso_da_c%C3%A9dula_de_20_reais.PNG" alt=""/>'
        document.getElementById('notas-20').innerText = notas_20 + " Nota(s) de R$20 Reais"
    }
    else {
        document.getElementById('nota-20').innerHTML = ''
        document.getElementById('notas-20').innerText = ''
    }

    if (notas_10 > 0) {
        document.getElementById('nota-10').innerHTML = '<img class="w-[80%]" src="https://upload.wikimedia.org/wikipedia/pt/4/4b/Anverso_da_c%C3%A9dula_de_10_reais.PNG" alt=""/>'
        document.getElementById('notas-10').innerText = notas_10 + " Nota(s) de R$10 Reais"
    }
    else {
        document.getElementById('nota-10').innerHTML = ''
        document.getElementById('notas-10').innerText = ''
    }

    if (notas_5 > 0) {
        document.getElementById('nota-5').innerHTML = '<img class="w-[80%]" src="https://upload.wikimedia.org/wikipedia/pt/b/bd/Anverso_da_c%C3%A9dula_de_5_reais.PNG" alt=""/>'
        document.getElementById('notas-5').innerText = notas_5 + " Nota(s) de R$5 Reais"
    }
    else {
        document.getElementById('nota-5').innerHTML = ''
        document.getElementById('notas-5').innerText = ''
    }

    if (notas_2 > 0) {
        document.getElementById('nota-2').innerHTML = '<img class="w-[80%]" src="https://upload.wikimedia.org/wikipedia/pt/1/1e/Anverso_da_c%C3%A9dula_de_dois_reais.PNG" alt=""/>'
        document.getElementById('notas-2').innerText = notas_2 + " Nota(s) de R$2 Reais"
    }
    else {
        document.getElementById('nota-2').innerHTML = ''
        document.getElementById('notas-2').innerText = ''
    }

    if (notas_1 > 0) {
        document.getElementById('nota-1').innerHTML = '<img class="w-[45%]" src="./image/1_real-removebg-preview.png" alt=""/>'
        document.getElementById('notas-1').innerText = notas_1 + " Moeda(s) de R$1 Real"
    }
    else {
        document.getElementById('nota-1').innerHTML = ''
        document.getElementById('notas-1').innerText = ''
    }

    if (moedas_050 > 0) {
        document.getElementById('nota-050').innerHTML = '<img class="w-[50%]" src="./image/50-removebg-preview.png" alt=""/>'
        document.getElementById('notas-050').innerText = moedas_050 + " Moeda(s) de R$0.50 Centavos"
    }
    else {
        document.getElementById('nota-050').innerHTML = ''
        document.getElementById('notas-050').innerText = ''
    }

    if (moedas_025 > 0) {
        document.getElementById('nota-025').innerHTML = '<img class="w-[35%]" src="./image/25-removebg-preview.png" alt=""/>'
        document.getElementById('notas-025').innerText = moedas_025 + " Moeda(s) de R$0.25 Centavos"
    }
    else {
        document.getElementById('nota-025').innerHTML = ''
        document.getElementById('notas-025').innerText = ''
    }

    if (moedas_010 > 0) {
        document.getElementById('nota-010').innerHTML = '<img class="w-[38%]" src="./image/10-removebg-preview.png" alt=""/>'
        document.getElementById('notas-010').innerText = moedas_010 + " Moeda(s) de R$0.10 Centavos"
    }
    else {
        document.getElementById('nota-010').innerHTML = ''
        document.getElementById('notas-010').innerText = ''
    }

    if (moedas_05 > 0) {
        document.getElementById('nota-05').innerHTML = '<img class="w-[38%]" src="./image/05-removebg-preview.png" alt=""/>'
        document.getElementById('notas-05').innerText = moedas_05 + " Moeda(s) de R$0.05 Centavos"
    }
    else {
        document.getElementById('nota-05').innerHTML = ''
        document.getElementById('notas-05').innerText = ''
    }

}