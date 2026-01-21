import { useContext, useState } from "react";
import FormContext from "../../Providers/FormContext";
import './Input.css'

function Input({type, id, label, ref}){
    const { formInput, setformInput } = useContext(FormContext);
    const [ text, setText ] = useState("");

    return (
        <>
            <input
                type={type}
                id={id}
                ref={ref}
                value={text}
                onChange={(e) => {
                    setText(e.target.value)
                    setformInput({...formInput, [label]: e.target.value})
                }}
            />
        </>
    )
}
export default Input;