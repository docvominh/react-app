import {useRef, useState} from "react";
import InputText from "../material/form/InputText";
import Card from "../material/Card";


const Login = (props) => {
    const userName = useRef('');
    const[error, setError] = useState(false);


    const onLogin = (event) => {
        event.preventDefault()
        if (userName.current.value !== '') {
            props.login(userName.current.value)
        } else {
            setError(true)
        }
    }
    const errorMessage = <p className="help is-danger">Username must not be empty</p>
    return (
        <Card editable={false} closeable={false}>
            <form id="loginForm">
                <InputText name="userName" fieldRef={userName} placeholder="User Name">
                    {error && errorMessage}
                </InputText>

                <div className="field">
                    <p className="control has-text-right">
                        <button className="button is-success" onClick={onLogin}>
                            Login
                        </button>
                    </p>
                </div>
            </form>
        </Card>
    )
}


export default Login