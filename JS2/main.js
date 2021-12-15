const json = {
    paises: [
        {
            nombre: "Tirana",
            capital: "Tirana",
        },
        {
            nombre: "Alemania",
            capital: "Berlín",
        },
        {
            nombre: "Andorra",
            capital: "Andorra la Vella",
        },
        {
            nombre: "España",
            capital: "Madrid",
        },
        {
            nombre: "Francia",
            capital: "París",
        },
        {
            nombre: "Inglaterra",
            capital: "Londres",
        },
        {
            nombre: "Bélgica",
            capital: "Bruselas",
        },
        {
            nombre: "Croacia",
            capital: "Zagreb",
        },
        {
            nombre: "Dinamarca",
            capital: "Copenhage",
        },
        {
            nombre: "Estonia",
            capital: "Tallín",
        },
        {
            nombre: "Finlandia",
            capital: "Helsinki",
        },
        {
            nombre: "Luxemburgo",
            capital: "Luxemburgo",
        },
        {
            nombre: "Mónaco",
            capital: "Mónaco",
        },
        {
            nombre: "Holanda",
            capital: "Ámsterdam",
        },
        {
            nombre: "Polonia",
            capital: "Varsovia",
        },
        {
            nombre: "Portugal",
            capital: "Lisboa",
        },
        {
            nombre: "Rusia",
            capital: "Moscú",
        },
        {
            nombre: "República Checa",
            capital: "Praga",
        }
    ]
};

document.write("<form>Buscar por capitales:  <input id='search' type='text' onkeyup='buscar()' /></form>")
document.write("<form>Buscar por país:  <input id='search2' type='text' onkeyup='buscarPais()' /></form>")
document.write("<table id='paisycapital'>")
document.write("<tr><th>Capital</th><th>País</th></tr>")
for (i = 0; i < json.paises.length; i++) {
    document.write("<tr>" + "<td>" + json.paises[i].capital + "</td>");
    document.write("<th class='xd'>" + json.paises[i].nombre + "</th>" + "</tr>");
    document.write("<tr class='noSearch hide'></tr>")
}
document.write("</table>");

function buscar() {
    const table = document.getElementById('paisycapital');
    const buscarTexto = document.getElementById('search').value.toLowerCase();
    let total = 0;

    //AQUI PARA RECORRER FILAS
    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const celdas = table.rows[i].getElementsByTagName('td');

        //RECORREMOS CELDAS
        for (let j = 0; j < celdas.length && !found; j++) {
            const comparar = celdas[j].innerHTML.toLowerCase();
            //PARA CONTENIDO
            if (buscarTexto.length == 0 || comparar.indexOf(buscarTexto) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            table.rows[i].style.display = '';
        } else {
            table.rows[i].style.display = 'none';
        }
    }
}

function buscarPais() {
    const table = document.getElementById('paisycapital');
    const buscarTexto = document.getElementById('search2').value.toLowerCase();
    let total = 0;

    //ESTO PARA RECORRER LAS FILAS
    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const celdas = table.rows[i].getElementsByTagName('th');

        //RECORRER LAS CELDAS
        for (let j = 0; j < celdas.length && !found; j++) {
            const comparar = celdas[j].innerHTML.toLowerCase();
            //AQUI EL CONTENIDO PARA RECORRER
            if (buscarTexto.length == 0 || comparar.indexOf(buscarTexto) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            table.rows[i].style.display = '';
        } else {
            table.rows[i].style.display = 'none';
        }
    }
}
