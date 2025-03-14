import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Forms() {

  //TODO leer credenciales a usuarios 

  const usuarios = {"pepito":"1234","juan":"3456"}; 
  const [formValues, setFormValues] = useState({user:"", password:""});
  const [validationStates, setIsValid] = useState({userState:true, passwordState:true});
  const handleUserChange = ((e) => {
    setFormValues({...formValues, user: e.target.value})
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    /*
    if (formValues.password.length <9 || (!formValues.password.match(/[\w]+/) ||!formValues.password.match(/[\d]+/))){
        setIsValid({...validationStates, passwordState: false});
    }else{
      setIsValid({...validationStates, passwordState: true});
    }

    console.log(validationStates.passwordState);
    */

  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });
  const clickSubmit = (() => {
    //Call fetch
    console.log("Clicked")

    //Validate in hash right credentials 
    alert(formValues.user)
    alert(formValues.password)
    if (usuarios[formValues.user] == formValues.password){
      setIsValid({...validationStates, userState: true});
      setIsValid({...validationStates, passwordState: true});

    }
    else{
      setIsValid({...validationStates, userState: false});
      setIsValid({...validationStates, passwordState: false});

    }

    //Cambiar página


    //Validate email 
    /*
    if (!formValues.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setIsValid({...validationStates, emailState: false});
    }else{
      setIsValid({...validationStates, emailState: true});
    }
    */
    //alert(JSON.stringify(formValues))
  }); 
  const clickSubmitCancelar = (() => {
    //Call fetch
    console.log("Canceled")

    //Validate email 
    /*
    if (!formValues.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setIsValid({...validationStates, emailState: false});
    }else{
      setIsValid({...validationStates, emailState: true});
    }
    */
    //alert(JSON.stringify(formValues))
  })

  return (
    <div>
      <h1>Inicio de sesión </h1>
     
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control type="text" placeholder="" onChange={handleUserChange} value={formValues.user} isInvalid={!validationStates.userState}/>
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password}  isInvalid={!validationStates.passwordState} />
        
      </Form.Group>
  
      <Button variant="primary" onClick={clickSubmit}>
        Ingresar
      </Button>
      <Button variant="primary" onClick={clickSubmitCancelar}>
        Cancelar
      </Button>
      { !validationStates.passwordState && !validationStates.userState && (<Form.Text className="text-danger"> Error de autenticación. Revise sus credenciales</Form.Text>)}

    </Form>
    </div>
  );
}

export default Forms;