import React, { useContext, useState, useRef, useImperativeHandle, useEffect } from "react";
import FormContext from "../../Providers/FormContext";
import './Input.css';

function Input({type, id, label, checkBlur, placeholder}, ref){
    const [ isValid, setIsValid ] = useState(true);
    const { formInput, setformInput } = useContext(FormContext);
    const [ text, setText ] = useState("");
    const [ shake, setShake ] = useState(true);

    const localRef = useRef(null);

    useEffect(() =>{
        setIsValid(true);
        setShake(true);
    }, [text])

    useImperativeHandle(ref, () =>{
        return {
            focus: () => localRef.current.focus(),
            setInValid: () => setIsValid(false),
            Shake: () => setShake(false)
        }
    }, [])

    return (
        <>
            <input
                className={`${(!isValid) ? "error-input" : ""} ${(!shake) ? "shake": "" }`}
                type={type}
                id={id}
                ref={ref}
                value={text}
                placeholder={placeholder}
                onBlur={checkBlur}
                onChange={(e) => {
                    setText(e.target.value)
                    setformInput({...formInput, [label]: e.target.value})
                }}
            />
        </>
    )
}

export default React.forwardRef(Input);
