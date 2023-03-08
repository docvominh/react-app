const InputText = (props) => {
    return (
        <div className="field">
            <div className="control">
                {props.label != undefined && <label className="label">{props.label}</label>}
                <input type="text" className="input"
                       id={props.id}
                       name={props.name}
                       value={props.value}
                       placeholder={props.placeholder}
                       onClick={props.onClick}
                       onKeyDown={props.onKeyDown}
                       ref={props.fieldRef}/>
                {props.children}
            </div>
        </div>
    )
}

export default InputText;
