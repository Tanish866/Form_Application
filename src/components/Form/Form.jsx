import './Form.css';
import Input from '../input/Input';
import { useContext, useRef, useState } from 'react';
import FormContext from '../../Providers/FormContext';
import validateEmail from '../../helper/emailValidtor';
import validatePassword from '../../helper/PasswordValidator';

function Form(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const addressRef = useRef(null);
    const [step, setStep] = useState(1);
    const { formInput } = useContext(FormContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formInput);
        handleInvalidEmail();
    }

    const handleInvalidEmail = () =>{
        if(!validateEmail(formInput.email)){
            emailRef.current.setInValid();
            emailRef.current.Shake();
        }
    }

    const handleInvalidPassword = () => {
        if(!validatePassword(formInput.password)){
            passwordRef.current.setInValid();
            passwordRef.current.Shake();
        }
    }



    if(step == 1){
        return(
            <div>
                New Form
                <br/>
                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="wrapper email-input-wrapper">

                        <Input
                            id="email-input"
                            type="email"
                            label="email"
                            placeholder="Enter email..."
                            key={1}
                            checkBlur={handleInvalidEmail}
                            ref={emailRef}
                        />
                    </div>
                    <div className="wrapper password-input-wrapper">
                        <Input
                            id="password-input"
                            type="password"
                            label="password"
                            placeholder="Enter password..."
                            key={2}
                            ref={passwordRef}
                            checkBlur={handleInvalidPassword}
                        />
                    </div>
                    <input 
                        type="submit"
                    />
                    <button onClick={() => setStep(step+1)}>
                        Next
                    </button>
                </form>
            </div>
        );
    }
    else if(step == 2){
        return(
            <div>

                <form onSubmit={handleFormSubmit} >
                    <div className="wrapper email-input-wrapper">

                        <Input
                            id="username-input"
                            type="text"
                            label="username"
                            key={3}
                            placeholder="Enter username..."
                            checkBlur={() => console.log("empty")}
                            ref={usernameRef}
                        />
                    </div>
                    <button onClick={() => setStep(step-1)}>
                        Prev
                    </button>

                    <input 
                        type="submit"
                    />
                    <button onClick={() => setStep(step+1)}>
                        Next
                    </button>
                </form>
            </div>
        );
    }
    else if(step == 3){
        return(
            <div>
                <form onSubmit={handleFormSubmit} >
                    <div className="wrapper email-input-wrapper">

                        <Input
                            id="address-input"
                            type="text"
                            label="address"
                            placeholder="Enter address..."
                            key={4}
                            checkBlur={() => console.log("empty")}
                            ref={addressRef}
                        />
                    </div>
                    <button onClick={() => setStep(step-1)}>
                        Prev
                    </button>
                    <input 
                        type="submit"
                    />
                </form>
            </div>
        );
    }


}
export default Form;
