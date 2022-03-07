import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const Citas = ({ eliminarCita, cita }) => {
    return (
        <div className='cita'>
            <p>Mascota:<span>{cita.Mascota}</span></p>
            <p>Dueño:<span>{cita.Dueño}</span></p>
            <p>Fecha:<span>{cita.Fecha}</span></p>
            <p>Hora:<span>{cita.Hora}</span></p>
            <p>Síntomas:<span>{cita.Sintomas}</span></p>

            <button className='btn btn-danger' onClick={() => eliminarCita(cita.id)}>
                <AiFillDelete size={30} /> Eliminar</button>


        </div >
    );
}

export default Citas
