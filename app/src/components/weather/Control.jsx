import Card from "../material/Card";
import {useState} from "react";
import InputText from "../material/form/InputText";

const Control = (props) => {
    const[searchError, setSearchError] = useState(false);
    const onKeyDown = (event) => {
        if (event.target.value === '') return;
        if (event.keyCode === 13) {
            props.add(event.target.value).then(() => {
                event.target.value = '';
                setSearchError(false)
            }).catch((e) => {
                console.log(e)
                setSearchError(true)
            })
        }
    }

    const onUnitChange = (event) => {
        props.onUnitChange(event.target.value)
    }

    const searchErrorMessage = <p className="help is-danger">Location not found</p>
    return (
        <Card closeable={false} editable={false}>
            <div>
                <p className='title is-3'>Control Panel</p>

                <InputText onKeyDown={onKeyDown} placeholder="City or geo">
                    {searchError && searchErrorMessage}
                </InputText>

                <div className="control">
                    <label className="radio">
                        <input type="radio" name="unit" value="C" checked={props.unit == 'C'} onChange={onUnitChange}/>
                        &nbsp;Celsius
                    </label>
                    <label className="radio">
                        <input type="radio" name="unit" value="F" checked={props.unit == 'F' } onChange={onUnitChange}/>
                        &nbsp;Fahrenheit
                    </label>
                </div>
            </div>
        </Card>
    )
}

export default Control;