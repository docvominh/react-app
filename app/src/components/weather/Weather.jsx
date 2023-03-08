import {useEffect, useState} from "react";
import {getLocationByCity, getLocationOverviews} from './ApiService'
import WeatherItem from "./WeatherItem";
import './Weather.css'
import Control from "./Control";
import EditModal from "./EditModal";

const Weather = () => {
    const [locations, setLocations] = useState([]);
    const [unit, setUnit] = useState('C');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        let selectedLocations = [
            {city: 'Da Nang'}
        ]

        getLocationOverviews(selectedLocations).then((data) => {
            setLocations(data);
        })

    }, [])

    const remove = (name) => {
        setLocations(locations.filter(item => item.location.name !== name));
    }

    const add = (name) => {
        let check = locations.filter(item => item.location.name === name);
        if(check.length > 0){
            return new Promise(resolve => {
                resolve('');
            });
        }

        return getLocationByCity(name).then((newLocation) => {
            if (newLocation !== undefined) {
                // setLocations([...locations, newLocation]);

                setLocations((prevState) => {
                    return [...prevState, newLocation]
                })
            }
        })
    }

    const onUnitChange = (unit) => {
        setUnit(unit)
    }

    const onEditLocation = (name) => {
        setSelectedCity(name);
    }
    const updateLocation = (q) => {
        getLocationByCity(q).then((newLocation) => {
            if (newLocation !== undefined) {
                // setLocations([...locations, newLocation]);
                let filteredLocation = locations.filter(item => item.location.name !== selectedCity)

                setLocations([...filteredLocation, newLocation])
                setSelectedCity('')
            }
        })
    }

    const closeEdit = (event) => {
        event.preventDefault();
        setSelectedCity('')
    }

    const noLocationFound = <p>No location select</p>

    return (
        <div className='overview'>
            <Control add={add} unit={unit} onUnitChange={onUnitChange}/>

            {locations.length === 0 && noLocationFound}
            {locations.length > 0 &&
                locations.map((element, index) => {
                    return <WeatherItem item={element}
                                        key={index}
                                        remove={() => remove(element.location.name)}
                                        unit={unit}
                                        onEditLocation={() => onEditLocation(element.location.name)}
                    />
                })
            }

            <EditModal city={selectedCity} close={closeEdit} updateLocation={updateLocation}/>
        </div>
    )
}

export default Weather;