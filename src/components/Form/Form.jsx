import './Form.css';
function Form(){
    return(
        <div>
            New Form
            <form>
                <div className="wrapper email-input-wrapper">
                    <input type="email"/>
                </div>
                <div className="wrapper password-input-wrapper">
                    <input type="password"/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}
export default Form;
