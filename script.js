

const EMPLEADOS = [
  {
    nombre: "hernan",
    apellido: "calvo",
    edad: 23,
    salario: 140000,
    profesion: "estudiante",
    activo: false,
  },
  {
    nombre: "dario",
    apellido: "cornelio",
    edad: 20,
    salario: 160000,
    profesion: "profesor",
    activo: true,
  },
  {
    nombre: "jessica",
    apellido: "estrada",
    edad: 26,
    salario: 1400000,
    profesion: "doctora",
    activo: true,
  },
  {
    nombre: "luis",
    apellido: "fonsi",
    edad: 40,
    salario: 0,
    profesion: "ex-trabajador",
    activo: false,
  },
];

const datos = JSON.parse(localStorage.getItem("usuarios")) || [];

if(datos.length > 0) {
  EMPLEADOS.push(...datos)
}

const edad = document.getElementById("edad");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const profesion = document.getElementById("profesion");

const empleados = document.getElementById("empleados");

function mostrarEmpleados() {

  EMPLEADOS.forEach((empleado) => {
    const edad_empleado = empleado.edad;
    const apellido_empleado = empleado.apellido;
    const nombre_empleado = empleado.nombre;
    const profesion_empleado = empleado.profesion;
    const activo_empleado = empleado.activo;
    const salario_empleado = empleado.salario;

    const campo_empleado = document.createElement("div");
    campo_empleado.setAttribute("id", "campo_empleado");

    campo_empleado.innerHTML = `
          <section id="campo_nombre">
            <div>
              <p>
                <strong
                  ><i
                    ><span id="nombre">${nombre_empleado}</span>
                    <span id="apellido">${apellido_empleado}</span></i
                  ></strong
                >
              </p>
            </div>
          </section>
          <div id="campo_edad">
            <p><span id="edad">Edad: ${edad_empleado}</span></p>
          </div>
          <div id="campo_salario">
            <p><span id="salario">Salario: ${salario_empleado}</span></p>
          </div>
          <div id="campo_profesion">
            <p><span id="profesion">Profesión: ${profesion_empleado}</span></p>
          </div>
    
    `;

    empleados.appendChild(campo_empleado);
  });
}


mostrarEmpleados();


