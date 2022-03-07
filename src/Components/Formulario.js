import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';


const Formulario = ({ crearCita }) => {
    //crear un State de Citas
    const [cita, actualizarCita] = useState({
        Mascota: '',
        Dueño: '',
        Fecha: '',
        Hora: '',
        Sintomas: '',
    });

    //error
    const [error, actualizarError] = useState(false);

    //funcion que guardar información que se coloca en el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //extraer los valores
    const { Mascota, Dueño, Fecha, Hora, Sintomas } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();


        //Validar
        if (Mascota.trim() === '' || Dueño.trim() === '' || Fecha.trim() === '' || Hora.trim() === '' || Sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        //Eliminar el mensaje previo 
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();
        console.log(cita);

        //Crear la Cita
        crearCita(cita);

        //Reiniciar el form
        actualizarCita({
            Mascota: '',
            Dueño: '',
            Fecha: '',
            Hora: '',
            Sintomas: '',
        })



    }
    return (
        <Fragment>

            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <div className="mb-3">
                    <label>Nombre Mascota </label>
                    <input type="text" name="Mascota" className="form-control" placeholder='Nombre Mascota' onChange={actualizarState} value={Mascota} />
                </div>
                <div className="mb-3">
                    <label>Nombre Dueño </label>
                    <input type="text" name="Dueño" className="form-control" placeholder='Nombre  Dueño de la mascota' onChange={actualizarState} value={Dueño} />
                </div>
                <div className="mb-3">
                    <label>Fecha </label>
                    <input type="date" name="Fecha" className="form-control" onChange={actualizarState} value={Fecha} />
                </div>
                <div className="mb-3">
                    <label>Hora </label>
                    <input type="time" name="Hora" className="form-control" onChange={actualizarState} value={Hora} />
                </div>
                <div className="mb-3">
                    <label>Síntomas </label>
                    <textarea type="text" name="Sintomas" className="form-control" onChange={actualizarState} value={Sintomas} />
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="summit">Agregar Cita</button>
                </div>
            </form>
        </Fragment >
    );
}

export default Formulario;