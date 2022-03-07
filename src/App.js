import React, { Fragment, useState } from 'react';
import Formulario from './Components/Formulario';
import Citas from './Components/Citas';
import Swal from 'sweetalert2';

function App() {

  //Arreglo de Citas
  const [citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    Swal.fire({
      title: "Eliminar",
      text: "Estas seguro que deseas eliminar la cita?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: ["Si"],
    }).then((respuesta) => {
      if (respuesta.isConfirmed) {
        //console.log(id, ' eliminado')
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevasCitas);
        Swal.fire({
          title: 'Eliminada',
          text: 'La cita se ha eliminado correctamente',
          icon: 'success',
        })
      }
    })


  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra tus Citas';

  return (
    <Fragment>

      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className='row align-items-start'>
          <div className='col'>
            < Formulario
              crearCita={crearCita}
            />

          </div>
          <div className='col'>
            <h1>{titulo}</h1>
            {citas.map(cita => (
              <Citas
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
