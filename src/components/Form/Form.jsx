import './Form.css';
import Input from '../input/Input';
import { useContext, useRef } from 'react';
import FormContext from '../../Providers/FormContext';


function Form(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const { formInput } = useContext(FormContext);
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formInput);
        emailRef.current.focus();

    }

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
                        ref={emailRef}
                    />
                </div>
                <div className="wrapper password-input-wrapper">
                    <Input
                        id="password-input"
                        type="password"
                        label="password"
                        ref={passwordRef}
                    />
                </div>
                <input 
                    type="submit"
                />
            </form>
        </div>
    );
}
export default Form;
