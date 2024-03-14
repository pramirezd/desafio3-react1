import { useState } from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import Buscador from './components/Buscador/Buscador';
import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';
import Alert from './components/Alert/Alert';


function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  const [employeeFilter, setemployeeFilter] = useState(baseColaboradores);

  const [alert, setAlert] = useState({
    alertText: '',
    alertCase: '',
    alertStatus: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <h1 className="m-3 ">Lista de Colaboradores</h1>
      <div className='m-1'>
        <Buscador
          dataFile={baseColaboradores}
          dataFileFilter={setemployeeFilter}
        />
      </div>
      <div className="row row-cols-2 justify-content-end m-2">
        <Listado
          dataFile={baseColaboradores}
          setDataFile={setBaseColaboradores}
          dataFileFilter={employeeFilter}
          setDataFileFilter={setemployeeFilter}
        />
        <Formulario
          addAlert={addAlert}
          dataFile={baseColaboradores}
          setDataFile={setBaseColaboradores}
          dataFileFilter={employeeFilter}
          setDataFileFilter={setemployeeFilter}
        />
        <Alert 
          className="alert" 
          alerta={alert}
        />
      </div>
    </>
  );
}

export default App;

