import React from 'react';
import { useState } from 'react';

const Formulario = ({ addAlert, dataFile, setDataFile, dataFileFilter, setDataFileFilter }) => {
  
    const [employeeData, setEmployeeData] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  function handlerInputs(event) {
    if (event.target.id === 'inputNombre') {
        setEmployeeData({ ...employeeData, nombre: event.target.value });
    }

    if (event.target.id === 'inputEmail') {
        setEmployeeData({ ...employeeData, correo: event.target.value });
    }

    if (event.target.id === 'inputEdad') {
        setEmployeeData({ ...employeeData, edad: event.target.value });
    }
    if (event.target.id === 'inputCargo') {
        setEmployeeData({ ...employeeData, cargo: event.target.value });
    }
    if (event.target.id === 'inputTelefono') {
        setEmployeeData({ ...employeeData, telefono: event.target.value });
    }
  }

  function addEmployee(event) {
    event.preventDefault();

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidPhone = /^[0-9]{9}$/;

    const validateData =    
        employeeData.nombre.trim() === '' ||
        employeeData.correo === '' ||
        employeeData.edad === '' ||
        employeeData.cargo.trim() === '' ||
        employeeData.telefono === '';

    if (validateData) {
      addAlert({
        alertText: 'Completa todos los campos!',
        alertCase: 'alert-danger',
        alertStatus: true,
      });
    } else if (!isValidEmail.test(employeeData.correo)) {
      addAlert({
        alertText: 'Formato de email incorrecto',
        alertCase: 'alert-danger',
        alertStatus: true,
      });
    } else if (!isValidPhone.test(employeeData.telefono)) {
      addAlert({
        alertText: 'El teléfono debe contar con 9 dígitos',
        alertCase: 'alert-danger',
        alertStatus: true,
      });
    } else {
      addAlert({
        alertText: 'Colaborador añadido exitosamente',
        alertCase: 'alert-success',
        alertStatus: true,
      });

      const newId = dataFile.length
        ? (parseInt(dataFile[dataFile.length - 1].id) + 1).toString()
        : '0';

      setDataFile([...dataFile, { ...employeeData, id: newId }]);
      setDataFileFilter([...dataFileFilter, { ...employeeData, id: newId }]);

      setEmployeeData({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
      });
    }
  }

  return (
    <div className="col-12 col-lg-3">
      <h3>Agregar Colaborador</h3>

      <form onSubmit={(event) => addEmployee(event)}>
        <div className="mb-2">
          <input
            onChange={(event) => handlerInputs(event)}
            value={employeeData.nombre}
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre del colaborador"
          />
        </div>

        <div className="mb-2">
          <input
            onChange={(event) => handlerInputs(event)}
            value={employeeData.correo}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email del colaborador"
            pattern=".*"
          />
        </div>

        <div className="mb-2">
          <input
            onChange={(event) => handlerInputs(event)}
            value={employeeData.edad}
            type="number"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del colaborador"
          />
        </div>

        <div className="mb-2">
          <input
            onChange={(event) => handlerInputs(event)}
            value={employeeData.cargo}
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del colaborador"
          />
        </div>

        <div className="mb-2">
          <input
            onChange={(event) => handlerInputs(event)}
            value={employeeData.telefono}
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Teléfono del colaborador"
          />
        </div>

        <div className="d-grid mb-2">
          <button type="submit" className="btn btn-primary">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario