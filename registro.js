const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const salario = document.getElementById("salario").value;
  const profesion = document.getElementById("profesion").value;
  const activo = document.querySelector('input[name="activo"]:checked').value;


  const datos = {
    "nombre":nombre,
    "edad":edad,
    "salario":salario,
    "activo":activo,
    "apellido":apellido,
    "profesion":profesion,
  }

  const datosPrevios = JSON.parse(localStorage.getItem("usuarios")) || [];
  datosPrevios.push(datos);
  localStorage.setItem("usuarios", JSON.stringify(datosPrevios));

  window.location.href = "index.html";
  
});
