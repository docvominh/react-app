const DropDown = (props) => {
    return (
        <div className="field">
            {props.label != undefined && <label className="label">{props.label}</label>}

            <div className="control">
                <div className="select">
                    <select id={props.id}
                            name={props.name}
                            value={props.value}
                            placeholder={props.placeholder}
                            onChange={props.onChange}
                            ref={props.ref}>
                        {
                            props.options.map((element, index) => {
                                return (<option value={element.value}>{element.text}</option>)
                            })
                        }

                    </select>
                </div>
            </div>
        </div>
    )


}

export default DropDown;