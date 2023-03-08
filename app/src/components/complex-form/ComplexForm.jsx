import InputText from "../material/form/InputText";
import DropDown from "../material/form/DropDown";
import {useRef} from "react";

const ComplexForm = (props) => {
    const name = useRef();
    const gender = useRef();
    return (
        <form>
            <InputText name="name"  ref={name}/>
            <DropDown ref={gender}/>
        </form>
    )
}

export default ComplexForm;