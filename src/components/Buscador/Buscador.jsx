import React from 'react';

const Buscador = ({ dataFile, dataFileFilter }) => {
  function inputHandler(event) {
    const searchEmployee = event.target.value.toLowerCase();

    const searchResult = dataFile.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(searchEmployee) ||
        colaborador.correo.toLowerCase().includes(searchEmployee) ||
        colaborador.edad.includes(searchEmployee) ||
        colaborador.cargo.toLowerCase().includes(searchEmployee) ||
        colaborador.telefono.includes(searchEmployee)
    );

    dataFileFilter(searchResult);
  }

  return (
    <div className="col-12 col-md-6 m-3">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        className="form-control mb-3"
        onChange={inputHandler}
      />
    </div>
  );
}

export default Buscador