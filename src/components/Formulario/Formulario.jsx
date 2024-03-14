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

    const inputNombre = event.target.id === 'inputNombre';
    const inputEmail = event.target.id === 'inputEmail';
    const inputEdad = event.target.id === 'inputEdad';
    const inputCargo = event.target.id === 'inputCargo';
    const inputTelefono = event.target.id === 'inputTelefono';

    switch(true) {
        case inputNombre:
            setEmployeeData({ ...employeeData, nombre: event.target.value });
        break;

        case inputEmail:
            setEmployeeData({ ...employeeData, correo: event.target.value });
        break;

        case inputEdad:
            setEmployeeData({ ...employeeData, edad: event.target.value });
        break;

        case inputCargo:
            setEmployeeData({ ...employeeData, cargo: event.target.value });
        break;

        case inputTelefono:
            setEmployeeData({ ...employeeData, telefono: event.target.value });
        break;
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

    const validateEmail = !isValidEmail.test(employeeData.correo);
    const validatePhone = !isValidPhone.test(employeeData.telefono);

    switch(true) {

        case validateData:
            addAlert({
                alertText: 'Completa todos los campos!',
                alertCase: 'alert-danger',
                alertStatus: true,
            });
        break;
            
        case validateEmail:
            addAlert({
                alertText: 'Formato de email incorrecto',
                alertCase: 'alert-danger',
                alertStatus: true,
            });
        break;

        case validatePhone:
            addAlert({
                alertText: 'El teléfono debe contar con 9 dígitos',
                alertCase: 'alert-danger',
                alertStatus: true,
            });
        break;

        default:
            addAlert({
                alertText: 'Colaborador añadido exitosamente',
                alertCase: 'alert-success',
                alertStatus: true,
            });

            const newId = dataFile.length ? (parseInt(dataFile[dataFile.length - 1].id) + 1).toString() : '0';

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
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre del colaborador"
            onChange={(event) => handlerInputs(event)}
            value={employeeData.nombre}
          />
        </div>

        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email del colaborador"
            onChange={(event) => handlerInputs(event)}
            value={employeeData.correo}
          />
        </div>

        <div className="mb-2">
          <input
            type="number"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del colaborador"
            onChange={(event) => handlerInputs(event)}
            value={employeeData.edad}
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del colaborador"
            onChange={(event) => handlerInputs(event)}
            value={employeeData.cargo}
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Teléfono del colaborador"
            onChange={(event) => handlerInputs(event)}
            value={employeeData.telefono}
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