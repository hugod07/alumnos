const alumnos = [];

        function registraralumno() {
            
            const nombrealumno = document.getElementById('alumno').value
            const edad = document.getElementById('edad').value

            const nuevoalumno = { nombre: nombrealumno,
                                   edad: parseInt(edad) }
            alumnos.push(nuevoalumno);

            mostrarAlumno()
            mostraralumno()
        }

        function mostrarAlumno() {
            for (let i = 0; i < alumnos.length; i++) {
                const alumno = alumnos[i]
                console.log("Nombre del alumno =" + alumno.nombre + "=edad =" + alumno.edad)
            }
        }

        function mostraralumno() {
            const listaElement = document.getElementById('lista');
            listaElement.innerHTML = '';

            for (let i = 0; i < alumnos.length; i++) {
                const alumno = alumnos[i]
                const listItem = document.createElement('li')
                listItem.textContent = "Nombre del alumno = " + alumno.nombre + "= edad = " + alumno.edad
                listaElement.appendChild(listItem);
            }
        }
//if (alumnos.length >= 4) {  alert('Ya has registrado el máximo de 4 alumnos.');  return; } para poner limite