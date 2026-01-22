import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form';
import FormContext from './Providers/FormContext';

function App() {

  const [ formInput, setformInput ] = useState({
    email: "",
    password: ""
  });

  return (
    <>
        Form Application
        <FormContext.Provider value={{formInput, setformInput}}>
          <Form/>
        </FormContext.Provider>

    </>
  )
}

export default App;
