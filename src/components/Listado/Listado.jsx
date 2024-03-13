import React from 'react'
import { BaseColaboradores } from '../../BaseColaboradores'

const Listado = () => {
    return (
        <div className="table-responsive m-3">
            <table class="table table-striped align-middle text-center table-bordered border-secondary">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Telefono</th>
                </tr>
            </thead>
            <tbody>
                {BaseColaboradores.map((colaborador) => (
                    <tr>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default Listado