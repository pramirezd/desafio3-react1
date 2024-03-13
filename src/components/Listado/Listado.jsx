import React from 'react';

const Listado = ({ dataFile, setDataFile, dataFileFilter, setDataFileFilter }) => {

  function deleteEmployee(id) {
    
    const newData = [...dataFile].filter(
        (colaborador) => colaborador.id !== id);
    setDataFile(newData);

    const newDataFilter = [...dataFileFilter].filter(
        (colaborador) => colaborador.id !== id
    );

    setDataFileFilter(newDataFilter);
  }

  const colaboradores = dataFileFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <i
          className="fa-solid fa-user-xmark"
          id='delete'
          onClick={() => deleteEmployee(colaborador.id)}
        ></i>
      </td>
    </tr>
  ));

  return (
    <div className="col-12 col-lg-9 mb-2">
      <table className="table table-responsive table-striped table-hover table-bordered border-secondary text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{colaboradores}</tbody>
      </table>
    </div>
  );
}

export default Listado