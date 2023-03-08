import Card from "../material/Card";
import Time from "../material/Time";
import {useState} from "react";


const WeatherItem = (props) => {

    const location = props.item.location;
    const current = props.item.current;



    let temperature;
    if(props.unit == 'C'){
        temperature = current.temp_c;
    }else{
        temperature = current.temp_f;
    }

    return (
        <Card closeable={true} editable={true} onEdit={props.onEditLocation} onRemove={props.remove}>
            <div className='columns'>
                <div className='column is-8-mobile'>
                    <h1>{location.name}</h1>
                    <h5>{location.country}</h5>
                </div>
                <div className='column is-4-mobile'>
                    <div className='column is-12 is-paddingless has-text-right'>
                        <img src={current.condition.icon}/>
                    </div>
                    <div className='column is-12 is-paddingless has-text-right'>
                        <span className='title is-5'>{current.condition.text}</span>
                    </div>
                    <div className='column is-12 is-paddingless has-text-right'>
                        <span className='title is-2'>{temperature}&#xb0;</span>
                    </div>
                </div>
            </div>
            <div className='column is-12 is-paddingless'>
                <Time time={location.localtime} timeOnly={true}/>
            </div>
        </Card>
    )
}

export default WeatherItem;