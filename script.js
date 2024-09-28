// Array de calificaciones pre-establecidas
const calificaciones = [5.5, 3.2, 6.8, 4.0, 2.9];

// Función para mostrar la lista de notas
function mostrarLista() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '<ul></ul>';
    const ul = resultadosDiv.querySelector('ul');
    
    for (const nota of calificaciones) {
        let li = document.createElement('li');
        li.textContent = `Nota: ${nota}`;
        ul.appendChild(li);
    }
}

// Función para calcular el promedio
function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    const promedio = suma / calificaciones.length;
    document.getElementById('resultados').innerHTML = `<p>Promedio: ${promedio.toFixed(2)}</p>`;
}

// Función para obtener la nota más alta
function notaMasAlta() {
    let maxNota = 0;
    let i = 0;
    while (i < calificaciones.length) {
        if (calificaciones[i] > maxNota) {
            maxNota = calificaciones[i];
        }
        i++;
    }
    document.getElementById('resultados').innerHTML = `<p>Nota más alta: ${maxNota}</p>`;
}

// Función para verificar si hay aplazos
function hayAplazos() {
    let i = 0;
    let aplazo = false;
    
    do {
        if (calificaciones[i] < 4) {
            aplazo = true;
            break;
        }
        i++;
    } while (i < calificaciones.length);
    
    if (aplazo) {
        document.getElementById('resultados').innerHTML = `<p>¡Hay aplazos!</p>`;
    } else {
        document.getElementById('resultados').innerHTML = `<p>No hay aplazos.</p>`;
    }
}
