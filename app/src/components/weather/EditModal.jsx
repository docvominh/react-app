import {useState} from "react";


const EditModal = (props) => {

    const onSubmit = (event) => {
        event.preventDefault();
        const fields = event.target.elements;
        const value = fields.inputValue.value;

        props.updateLocation(value);
        fields.inputValue.value = '';
    }

    return (
        <div className={`modal ${props.city!=='' ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <form onSubmit={onSubmit}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Edit location for {props.city}</p>
                        <button className="delete" aria-label="close" onClick={props.close}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <p>My place: 16.0463,108.2211</p>
                            <p>Zuhlke HCM: 10.8045, 106.7349</p>
                            <p>Zuhlke Singapore: 1.2802,103.8496</p>
                            <div className="control">
                                <input className="input" name="inputValue" type="text" placeholder="city name / latitude and longitude"/>
                            </div>
                        </div>

                    </section>
                    <footer className={"modal-card-foot is-justify-content-end"}>
                        <button className="button is-success">Save changes</button>
                        <button className="button" onClick={props.close}>Cancel</button>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default EditModal;