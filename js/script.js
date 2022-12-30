class Alumno {
  constructor(codigo, nombre, nota1, nota2, nota3, nota4) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
  }

  promedio() {
    return (
      this.nota1 * 0.15 +
      this.nota2 * 0.2 +
      this.nota3 * 0.25 +
      this.nota4 * 0.4
    );
  }

  condicion() {
    return this.promedio() >= 12 ? "Aprobado" : "Desaprobado";
  }

  obsequio() {
    return this.promedio() > 17 ? "Mochila" : "";
  }
}

function calcular() {
  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const nota3 = document.getElementById("nota3").value;
  const nota4 = document.getElementById("nota4").value;

  const alumno = new Alumno(codigo, nombre, nota1, nota2, nota3, nota4);

  document.getElementById("promedio").innerHTML =
    "Promedio: " + alumno.promedio();
  document.getElementById("condicion").innerHTML =
    "Condición: " + alumno.condicion();
  document.getElementById("obsequio").innerHTML =
    "Obsequio: " + alumno.obsequio();
}
